### README.md

```markdown
# All Sorting Algorithm

A comprehensive package implementing various sorting algorithms in JavaScript.

## Features

- Bubble Sort
- Quick Sort
- Merge Sort
- Shell Sort
- Counting Sort
- Radix Sort
- Insertion Sort
- Selection Sort

## Installation

Install the package using npm:

```bash
npm install all-sorting-algorithm
```

## Usage

First, require the package in your project:

```javascript
const {
    bubbleSort,
    quickSort,
    mergeSort,
    shellSort,
    countingSort,
    radixSort,
    insertionSort,
    selectionSort,
} = require('all-sorting-algorithm');
```

Then, you can use any of the sorting algorithms:

```javascript
const arr = [5, 3, 8, 4, 2];
const maxVal = 8; // Only needed for countingSort

console.log('Bubble Sort:', bubbleSort([...arr]));
console.log('Quick Sort:', quickSort([...arr]));
console.log('Merge Sort:', mergeSort([...arr]));
console.log('Shell Sort:', shellSort([...arr]));
console.log('Counting Sort:', countingSort([...arr], maxVal));
console.log('Radix Sort:', radixSort([...arr]));
console.log('Insertion Sort:', insertionSort([...arr]));
console.log('Selection Sort:', selectionSort([...arr]));
```

## API

### bubbleSort(arr)

Sorts the array using Bubble Sort algorithm.

- **Parameters**:
  - `arr` (Array): The array to sort.
- **Returns**:
  - (Array): The sorted array.

### quickSort(arr)

Sorts the array using Quick Sort algorithm.

- **Parameters**:
  - `arr` (Array): The array to sort.
- **Returns**:
  - (Array): The sorted array.

### mergeSort(arr)

Sorts the array using Merge Sort algorithm.

- **Parameters**:
  - `arr` (Array): The array to sort.
- **Returns**:
  - (Array): The sorted array.

### shellSort(arr)

Sorts the array using Shell Sort algorithm.

- **Parameters**:
  - `arr` (Array): The array to sort.
- **Returns**:
  - (Array): The sorted array.

### countingSort(arr, maxVal)

Sorts the array using Counting Sort algorithm.

- **Parameters**:
  - `arr` (Array): The array to sort.
  - `maxVal` (Number): The maximum value in the array.
- **Returns**:
  - (Array): The sorted array.

### radixSort(arr)

Sorts the array using Radix Sort algorithm.

- **Parameters**:
  - `arr` (Array): The array to sort.
- **Returns**:
  - (Array): The sorted array.

### insertionSort(arr)

Sorts the array using Insertion Sort algorithm.

- **Parameters**:
  - `arr` (Array): The array to sort.
- **Returns**:
  - (Array): The sorted array.

### selectionSort(arr)

Sorts the array using Selection Sort algorithm.

- **Parameters**:
  - `arr` (Array): The array to sort.
- **Returns**:
  - (Array): The sorted array.

## License

This project is licensed under the ISC License.

## Author

Nitin Semwal
```
