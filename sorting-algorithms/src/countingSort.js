function countingSort(arr, maxVal) {
    let n = arr.length;
    let count = new Array(maxVal + 1).fill(0);
    let output = new Array(n);

    for (let i = 0; i < n; i++) {
        count[arr[i]]++;
    }

    for (let i = 1; i <= maxVal; i++) {
        count[i] += count[i - 1];
    }

    for (let i = n - 1; i >= 0; i--) {
        output[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }

    return output;
}

module.exports = countingSort;
