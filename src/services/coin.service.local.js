import axios from 'axios'
import { storageService } from './async-storage.service.js'

const STORAGE_KEY = 'coinDB'

export const coinService = {
    query,
    update,
    save,
    remove,
    getEthData,
    getTimelinePrices
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
        console.log('error:', error)
        throw error
    }
}


async function getTimelinePrices(timeline = 1) {
    const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=${timeline}`)
    const { prices } = data

    const timelinePrices = []
    const seenTimestamps = new Set()

    prices.forEach(([timestamp, price]) => {
        const date = new Date(timestamp)
        date.setHours(0, 0, 0, 0)
        const dateString = date.toDateString()

        if (!seenTimestamps.has(dateString)) {
            seenTimestamps.add(dateString)
            timelinePrices.push({ timestamp, price })
        }
    })

    return timelinePrices

}