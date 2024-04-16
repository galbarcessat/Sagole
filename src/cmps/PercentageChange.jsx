import { useEffect, useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export function PercentageChange({ change }) {
    const [isChangeUp, setIsChangeUp] = useState(true)

    //check if the useEffect is realy needed
    useEffect(() => {
        setIsChangeUp(change >= 0)
    }, [change])

    return (
        <div style={{ backgroundColor: isChangeUp ? 'green' : 'red' }} className='percentage-change'>
            {/* arrow should change if up or down  */}
            {isChangeUp ?
                <KeyboardArrowUpIcon fontSize='small' />
                :
                <ArrowDropDownIcon fontSize='small' />}

            <span >{change}%</span>
        </div>
    )
}
