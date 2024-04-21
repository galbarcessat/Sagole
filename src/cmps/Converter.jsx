import { useState } from "react";
import SyncAltIcon from '@mui/icons-material/SyncAlt';

export function Converter({ currentEthPrice }) {
  const [usdAmount, setUsdAmount] = useState('')
  const [ethAmount, setEthAmount] = useState(currentEthPrice || '')

  function handleInputChange(event, type) {
    const value = event.target.value
    if (!/^\d*\.?\d*$/.test(value)) return
    if (type === 'usd') {
      setUsdAmount(value)
      const ethValue = value / currentEthPrice
      setEthAmount(ethValue.toFixed(5))
    } else if (type === 'eth') {
      setEthAmount(value)
      const usdValue = value * currentEthPrice
      setUsdAmount(usdValue.toFixed(2))
    }
  }

  return (
    <div className="converter-main-container">
      <h1>Convert United States Dollar (USD) to Ethereum (ETH)</h1>
      <div className="converter">

        <div className="input-container">
          <input type="text" value={usdAmount} onChange={(e) => handleInputChange(e, 'usd')} />
          <span>USD</span>
        </div>

        <div className="arrows-icon-container">
          <SyncAltIcon />
        </div>

        <div className="input-container">
          <input type="text" value={ethAmount} onChange={(e) => handleInputChange(e, 'eth')} />
          <span>ETH</span>
        </div>

      </div>
    </div>
  );
}
