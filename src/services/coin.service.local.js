import axios from 'axios'
import { storageService } from './async-storage.service.js'

const STORAGE_KEY = 'coinDB'
const BASE_URL = 'coin'

export const coinService = {
    query,
    update,
    save,
    remove,
    getEthData
}

// Coin functions
async function query() {
    return await storageService.query(STORAGE_KEY)
}

async function save(coin) {
    return await storageService.post(STORAGE_KEY, coin)
}

async function remove(coinId) {
    return await storageService.remove(STORAGE_KEY, coinId)
}

async function update(coin) {
    return await storageService.put(STORAGE_KEY, coin)
}

async function getEthData() {
    try {
        const { data } = await axios.get('https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=1')
        return {
            marketcap: data.market_caps[data.market_caps.length - 1],
            prices: data.prices,
            totalvolume: data.total_volumes[data.total_volumes.length - 1]
        }
    } catch (error) {
        throw error
    }


}
