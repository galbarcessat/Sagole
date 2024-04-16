import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export function CoinDetailsFooter() {
    return (
        <div className="coin-details-footer">
            <div className="change-volume-timeline">
                <span>24HR VOLUME</span>
                <KeyboardArrowDownIcon fontSize='small'/>
            </div>
            <span>₪20,214,502,760.01 ILS</span>
        </div>
    )
}
