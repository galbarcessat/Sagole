import { useState } from "react";
import { CoinDetails } from "../cmps/CoinDetails";
import { Converter } from "../cmps/Converter";

export function HomePage() {
    const [currentPrice, setCurrentPrice] = useState(null)

    return (
        <div className="home-page-container">
            <CoinDetails currentPrice={currentPrice} setCurrentPrice={setCurrentPrice}/>
            <Converter currentEthPrice={currentPrice}/>
        </div>
    )
}