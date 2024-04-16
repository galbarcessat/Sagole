import { useEffect } from "react";
import { coinService } from "../services/coin.service.local";
import { CoinDetailsFooter } from "./CoinDetailsFooter";
import { CoinDetailsHeader } from "./CoinDetailsHeader";
import { PercentageChange } from "./PercentageChange";
import { PriceChangesGraph } from "./PriceChangesGraph";
import { TimelineChange } from "./TimelineChange";

export function CoinDetails() {

    useEffect(() => {
        fetchEthData()
    }, [])

    async function fetchEthData() {
        const data = await coinService.getEthData()
        console.log('data:', data)
    }

    return (
        <div className="coin-details-container">
            <CoinDetailsHeader />

            <div className="inner-container">

                <div className="header">
                    <div className="updated-price-container">
                        <h1>₪6,546.25 ILS</h1>
                        <PercentageChange />
                    </div>
                    <h2>Last week changes</h2>
                </div>

                <PriceChangesGraph />
                <TimelineChange />
            </div>

            <CoinDetailsFooter />
        </div>
    )
}
