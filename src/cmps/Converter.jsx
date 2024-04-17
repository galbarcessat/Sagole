import { useState } from "react";
import SyncAltIcon from '@mui/icons-material/SyncAlt';
export function Converter() {
  const [currentEthValue, setCurrentEthValue] = useState(3064.84)
  const [usdAmount, setUsdAmount] = useState(1)
  const [ethAmount, setEthAmount] = useState(currentEthValue)

  function handleInputChange(event, type) {
    const value = event.target.value
    console.log('value:', value)
    if (!/^\d*\.?\d*$/.test(value)) return
    if (type === 'usd') {
      setUsdAmount(value)
      // VALUE COMPARE TO REAL ETH VALUE 
      const ethValue = value * 0.0008
      setEthAmount(ethValue.toFixed(6))
    } else if (type === 'eth') {
      setEthAmount(value)
      // VALUE COMPARE TO REAL ETH VALUE 
      const usdValue = value / 0.0008
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
