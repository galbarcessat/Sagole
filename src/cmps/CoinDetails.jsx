import { useEffect, useState } from "react";
import { coinService } from "../services/coin.service.local";
import { CoinDetailsFooter } from "./CoinDetailsFooter";
import { CoinDetailsHeader } from "./CoinDetailsHeader";
import { PercentageChange } from "./PercentageChange";
import { PriceChangesGraph } from "./PriceChangesGraph";
import { TimelineChange } from "./TimelineChange";

export function CoinDetails() {
    const [currentPrice, setCurrentPrice] = useState(null)
    const [dailyPrecentageChange, setDailyPrecentageChange] = useState(null)
    const [currentVolume, setCurrentVolume] = useState(null)
    const [currentMarketCap, setCurrentMarketCap] = useState(null)
    const [currentTimeline, setCurrentTimeline] = useState(7)

    // -maybe send the fetch function the timeline - 1D 7D 30D 180D 365D
    // -for now it fetches the day
    // -Change graph color to gradient - TODO 
    // -change graph timeline 

    useEffect(() => {
        //set interval to half a min - TODO
        fetchEthData()
        coinService.getTimelinePrices(7)
    }, [])


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

    console.log('currentPrice:', currentPrice)
    console.log('dailyPrecentageChange:', dailyPrecentageChange)
    console.log('currentVolume:', currentVolume)
    console.log('currentMarketCap:', currentMarketCap)
   
    return (
        <div className="coin-details-container">
            <CoinDetailsHeader />

            <div className="inner-container">

                <div className="header">
                    <div className="updated-price-container">
                        {/* <h1>$6,546.25 USD</h1> */}
                        <h1>${Number(currentPrice?.toFixed(2)).toLocaleString('en-US')} USD</h1>
                        <PercentageChange change={dailyPrecentageChange} />
                    </div>
                    <h2>Last week changes</h2>
                </div>

                <PriceChangesGraph />
                <TimelineChange currentTimeline={currentTimeline} setCurrentTimeline={setCurrentTimeline} />
            </div>

            <CoinDetailsFooter marketCap={currentMarketCap} totalVolume={currentVolume} />
        </div>
    )
}
