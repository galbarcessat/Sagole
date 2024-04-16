import { PriceChangesGraph } from "./PriceChangesGraph";

export function CoinDetails() {
    return (
        <div className="coin-details-container">
            <div className="coin-header">
                <h1>ETH</h1>
                <button>Menu</button>
            </div>
            <div className="inner-container">
                <PriceChangesGraph />
            </div>
        </div>
    )
}
