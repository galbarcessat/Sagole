import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export function CoinDetailsFooter({ totalVolume, marketCap }) {
    return (
        <div className="coin-details-footer">
            <div>
                <div className="change-volume-timeline">
                    <span>24HR VOLUME</span>
                    <KeyboardArrowDownIcon fontSize='small' />
                </div>
                <span>${Number(totalVolume)?.toLocaleString('en-US')} USD</span>
            </div>

            <div className='market-cap-container'>
                <span>MARKET CAP</span>

                <span>${Number(marketCap)?.toLocaleString('en-US')} USD</span>
            </div>
        </div>
    )
}
