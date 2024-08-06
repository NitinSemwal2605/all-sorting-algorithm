const {
    bubbleSort,
    quickSort,
    mergeSort,
    shellSort,
    countingSort,
    radixSort,
    insertionSort,
    selectionSort,
} = require('./src');

const arr = [5, 3, 8, 4, 2];
const maxVal = 8;

console.log('Bubble Sort:', bubbleSort([...arr]));
console.log('Quick Sort:', quickSort([...arr]));
console.log('Merge Sort:', mergeSort([...arr]));
console.log('Shell Sort:', shellSort([...arr]));
console.log('Counting Sort:', countingSort([...arr], maxVal));
console.log('Radix Sort:', radixSort([...arr]));
console.log('Insertion Sort:', insertionSort([...arr]));
console.log('Selection Sort:', selectionSort([...arr]));
