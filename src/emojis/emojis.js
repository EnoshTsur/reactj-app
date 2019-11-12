function getEmoji(number) {
    return `&#${number};`;
}
const emojis = Object.freeze({
    morning: '🌝',
    noon: '🌔',
    afterNoon: '🌓',
    night: '🌚',
})

const getEmojiByDayTime = () => {
    const now = new Date();
    const hours = now.getHours();
    return hours < 13 ? emojis.morning :
        (hours >= 13 && hours < 16) ? emojis.noon :
            (hours >= 16 && hours < 19) ? emojis.afterNoon :
                emojis.night
}

export {
    emojis,
    getEmojiByDayTime,
}