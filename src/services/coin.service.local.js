import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'

const STORAGE_KEY = 'coinDB'
const BASE_URL = 'coin'

export const boardService = {
    query,
    update,
    save,
    remove
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
