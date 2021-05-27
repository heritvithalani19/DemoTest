import { Constants } from '../CommonConfig';

/**
 * Return random number between inclusive and exclusive
 * @param {Number} length - exclusive length for randome number
 * @param {Boolean} countOne - add plus 1 count
 */
const getRandomNumber = (exclusiveLength = 1, countOne = false) => {
    if (countOne) {
        return Math.floor(Math.random() * exclusiveLength + 1);
    } else {
        return Math.floor(Math.random() * exclusiveLength);
    }
};

/**
 * Return a random UUID identifier (always generates random UUID )
 */
const getUUID = () => {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
        /[xy]/g,
        function (c) {
            var r = (dt + Math.random() * 16) % 16 | 0;
            dt = Math.floor(dt / 16);
            return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
        },
    );
    return uuid;
};

/**
 * Return a trimmed string by removing extra spaces
 * @param {String} text - message to be trimmed
 */
const trimString = (text) => {
    if (typeof text == 'string') {
        return text.replace(/\s+/g, ' ').trim();
    }
    return text;
};

/**
 * Return type of environemt TESTING | PRODUCTION
 */
const isTestEnvironment = () => {
    return (
        // Change this between TEST and PROD
        (global.env == Constants.ENVIRONMENT.TEST ? Constants.ENVIRONMENT.TEST
            : Constants.ENVIRONMENT.PROD)

    );
};

/**
 *  Returns an array with arrays of the given size
 *
 * @param {Array} myArray - data array to split
 * @param {Number} chunkSize - size of every group
 */
const chunkArray = (myArray, chunkSize) => {
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];

    for (index = 0; index < arrayLength; index += chunkSize) {
        // Do something if you want with the group
        tempArray.push(myArray.slice(index, index + chunkSize));
    }

    return tempArray;
};

const getHitSlop = (hitSlop = 5) => {
    return {
        top: hitSlop,
        bottom: hitSlop,
        right: hitSlop,
        left: hitSlop,
    };
};

/**
 * Format the given time into 00:00
 * @param {Number} seconds - value to test
 */
const formatTime = (seconds) => {
    let dateObj = new Date(seconds * 1000);
    let Minutes = dateObj.getUTCMinutes();
    let Seconds = dateObj.getSeconds();
    return (
        Minutes.toString().padStart(2, '0') +
        ':' +
        Math.floor(Seconds).toString().padStart(2, '0')
    );
};

/**
 * Return formatted timestamp string for event
 * @param {String} startTimestamp
 * @param {String} endTimestamp
 */
// const getEventTimestamp = (startTimestamp, endTimestamp) => {
//     let date = '';
//     if (startTimestamp) {
//         date +=
//             moment(startTimestamp).format('ddd').toUpperCase() +
//             ', AT ' +
//             moment(startTimestamp).format('HH:MM A').toUpperCase();
//     }
//     if (endTimestamp) {
//         date += ' - ' + moment(endTimestamp).format('HH:MM A').toUpperCase();
//     }

//     return date;
// };

/**
 * Return formatted string for long numbers
 * @param {Number} n - Long number
 */
const formatLongNumbers = (n) => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + 'K';
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + 'M';
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + 'B';
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + 'T';
};

/**
 * Return formatted amount value with $ sign
 * @param {String} n - amount value
 */
const formatPrice = (amount) => {
    return '$ '.concat(amount.toFixed(0).replace(/\d(?=(\d{3})+\.)/g, '$&,'));
};

export default {
    getRandomNumber,
    getUUID,
    trimString,
    isTestEnvironment,
    chunkArray,
    getHitSlop,
    formatTime,
    formatLongNumbers,
    formatPrice,
};
