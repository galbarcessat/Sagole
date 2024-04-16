

export const utilService = {
    makeId,
    getRandomIntInclusive,
    loadFromStorage,
    saveToStorage,
    debounce,
    timeStampToDate,
    getTimelineRange,
    getTimestampInDays,
    millisecondsToDays
}

function makeId(length = 6) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return txt
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive 
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key) {
    const data = localStorage.getItem(key)
    return (data) ? JSON.parse(data) : undefined
}

function debounce(func, timeout = 300) {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => { func.apply(this, args) }, timeout)
    }
}

function timeStampToDate(timeStamp) {
    const timelineToSave = new Date(timeStamp).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
    })
    return timelineToSave
}

function getTimestampInDays(Timeline) {
    if (!Timeline || !Timeline.from || !Timeline.to) return
    const estTime = Timeline.to - Timeline.from
    return utilService.millisecondsToDays(estTime) || 1
}