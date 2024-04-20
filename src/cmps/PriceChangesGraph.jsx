import { Test } from './Test';

export function PriceChangesGraph({ graphData }) {
    const timestamps = graphData?.map(entry => new Date(entry.timestamp))
    const prices = graphData?.map(entry => entry.price)

    if (!graphData) return <div>Loading...</div>

    return (
        <div className='graph-container'>
            <Test timestamps={timestamps} prices={prices} />
        </div>
    )
}



