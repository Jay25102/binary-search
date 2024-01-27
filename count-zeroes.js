function countZeroesRec(arr, start, end) {
    if (end >= start) {
        let middle = start + Math.floor((end - start) / 2);
        // if this is first zero
        if ((middle === 0 || arr[middle-1] === 1) && arr[middle] === 0) {
            return middle;
        }
        else if (arr[middle] === 1) {
            return countZeroesRec(arr, middle + 1, end);
        }
        else {
            return countZeroesRec(arr, start, middle - 1);
        }
    }
    return -1;
}

function countZeroes(arr) {
    // if every element is a 1, return 0
    // if (arr[arr.length] === 1) {
    //     return 0;
    // }

    let firstZero = countZeroesRec(arr, 0, arr.length - 1);
    if (firstZero === -1) {
        return 0;
    }
    return arr.length - firstZero;
}

module.exports = countZeroes