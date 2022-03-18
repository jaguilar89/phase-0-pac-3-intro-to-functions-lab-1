function shout(str) {
    return str.toUpperCase()
};

function whisper(str) {
    return str.toLowerCase()
};

const logShout = (str) => {
    console.log(str.toUpperCase());
};

const logWhisper = (str) => {
    console.log(str.toLowerCase())
};

function sayHiToHeadphonedRoommate (str) {
    if (str === str.toLowerCase()) {
        return 'I can\'t hear you!'
    } else if (str === str.toUpperCase()) {
        return 'YES INDEED!'
    } else if (str === 'Let\'s have dinner together!') {
        return 'I would love to!'
    }
}