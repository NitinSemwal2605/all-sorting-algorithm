function radixSort(arr) {
    const getMax = (arr) => Math.max(...arr);
    const getDigit = (num, place) => Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
    const digitCount = (num) => (num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1);
    const mostDigits = (arr) => Math.max(...arr.map(num => digitCount(num)));

    let maxDigitCount = mostDigits(arr);

    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);

        for (let i = 0; i < arr.length; i++) {
            let digit = getDigit(arr[i], k);
            digitBuckets[digit].push(arr[i]);
        }

        arr = [].concat(...digitBuckets);
    }

    return arr;
}

module.exports = radixSort;
