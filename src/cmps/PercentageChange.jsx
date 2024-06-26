import { useEffect, useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export function PercentageChange({ change }) {
    const [isChangeUp, setIsChangeUp] = useState(true)

    useEffect(() => {
        setIsChangeUp(change >= 0)
    }, [change])

    return (
        <div style={{ backgroundColor: isChangeUp ? 'green' : '#FC0100' }} className='percentage-change'>
            {isChangeUp ?
                <KeyboardArrowUpIcon fontSize='small' />
                :
                <ArrowDropDownIcon fontSize='small' />}
            <span >{change}%</span>
        </div>
    )
}
