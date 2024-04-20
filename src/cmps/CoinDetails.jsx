import { useEffect, useState } from "react";
import { coinService } from "../services/coin.service.local";
import { CoinDetailsFooter } from "./CoinDetailsFooter";
import { CoinDetailsHeader } from "./CoinDetailsHeader";
import { PercentageChange } from "./PercentageChange";
import { PriceChangesGraph } from "./PriceChangesGraph";
import { TimelineChange } from "./TimelineChange";

export function CoinDetails({ currentPrice, setCurrentPrice }) {
    const [dailyPrecentageChange, setDailyPrecentageChange] = useState(null)
    const [currentVolume, setCurrentVolume] = useState(null)
    const [currentMarketCap, setCurrentMarketCap] = useState(null)
    const [selectedTimeline, setSelectedTimeline] = useState(7)
    const [graphData, setGraphData] = useState(null)

    // -Change graph color to gradient - TODO 

    useEffect(() => {
        fetchEthData()

        const interval = setInterval(() => {
            fetchEthData()
        }, 30000)

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        getGraphData()
    }, [selectedTimeline])

    async function fetchEthData() {
        try {
            const data = await coinService.getEthData()
            setCurrentPrice(getLatestPrice(data.prices)[1])
            setDailyPrecentageChange(getPercentageChange(data.prices))
            setCurrentVolume(data.totalvolume[1].toFixed(2))
            setCurrentMarketCap(data.marketcap[1].toFixed(2))

        } catch (error) {
            console.log('error:', error)
        }
    }

    async function getGraphData() {
        try {
            const timelineData = await coinService.getTimelinePrices(selectedTimeline)
            setGraphData(timelineData)
        } catch (error) {
            console.log('error:', error)
        }
    }

    function getLatestPrice(prices) {
        return prices[prices.length - 1]
    }

    function getPercentageChange(prices) {
        if (prices.length < 2) {
            throw new Error("Not enough data to calculate percentage change.");
        }
        const firstPrice = prices[0][1]
        const latestPrice = prices[prices.length - 1][1]
        const change = ((latestPrice - firstPrice) / firstPrice) * 100
        return +change.toFixed(2)
    }

    function getTimelineText() {
        if (selectedTimeline === 7) return 'week'
        else if (selectedTimeline === 30) return 'month'
        else if (selectedTimeline === 180) return 'half year'
        else if (selectedTimeline === 365) return 'year'
    }

    return (
        <div className="coin-details-container">
            <CoinDetailsHeader />

            <div className="inner-container">

                <div className="header">
                    <div className="updated-price-container">
                        <h1>${Number(currentPrice?.toFixed(2)).toLocaleString('en-US')} USD</h1>
                        <PercentageChange change={dailyPrecentageChange} />
                    </div>
                    <h2>Last {getTimelineText()} changes</h2>
                </div>

                <PriceChangesGraph graphData={graphData} />
                <TimelineChange selectedTimeline={selectedTimeline} setSelectedTimeline={setSelectedTimeline} />
            </div>

            <CoinDetailsFooter marketCap={currentMarketCap} totalVolume={currentVolume} />
        </div>
    )
}
