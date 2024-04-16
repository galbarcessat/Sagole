import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export function CoinDetailsFooter({ totalVolume, marketCap }) {
    return (
        <div className="coin-details-footer">
            <div>
                <div className="change-volume-timeline">
                    <span>24HR VOLUME</span>
                    <KeyboardArrowDownIcon fontSize='small' />
                </div>
                {/* <span>₪20,214,502,760.01 ILS</span> */}
                <span>₪{totalVolume} ILS</span>
            </div>

            <div className='market-cap-container'>
                <span>MARKET CAP</span>
                <span>₪{marketCap} ILS</span>
            </div>
        </div>
    )
}
