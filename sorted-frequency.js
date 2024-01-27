function findLastInstance(arr, target, start, end) {
    if (end >= start) {
        let mid = Math.floor((end + start) / 2);
        if ((target < arr[mid+1] && arr[mid] === target) || mid === arr.length - 1) {
            return mid;
        }
        else if (target < arr[mid]) {
            return findLastInstance(arr, target, start, mid - 1);
        }
        else {
            return findLastInstance(arr, target, mid + 1, end);
        }
    }
    return -1;
}

function findFirstInstance(arr, target, start, end) {
    if (end >= start) {
        let mid = Math.floor((end + start) / 2);
        if ((mid === 0 || target > arr[mid - 1]) && arr[mid] === target) {
            return mid;
        }
        else if (target > arr[mid]) {
            return findFirstInstance(arr, target, mid + 1, end);
        }
        else {
            return findFirstInstance(arr, target, start, mid - 1);
        }
    }
    return -1;
}

function sortedFrequency(arr, target) {
    let firstIdx = findFirstInstance(arr, target, 0, arr.length - 1);
    if (firstIdx === -1) {
        return firstIdx;
    }
    let lastIdx = findLastInstance(arr, target, firstIdx, arr.length - 1);
    return lastIdx - firstIdx + 1;
}

module.exports = sortedFrequency