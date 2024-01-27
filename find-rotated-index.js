function binarySearch(arr, target, start, end) {
    if (arr.length === 0) {
        return -1;
    }
    if (target < arr[start] || target > arr[end]) {
        return -1;
    }

    while (end >= start) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        else if (target < arr[mid]) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }
    return -1;
}

function findPivot(arr, start, end) {
    if (arr.length === 1 || arr[0] < arr[arr.length-1]) {
        return 0;
    }

    while (end >= start) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] > arr[mid+1]) {
            return mid + 1;
        }
        else if (arr[start] <= arr[mid]) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
}

function findRotatedIndex(arr, target) {
    let pivot = findPivot(arr, 0, arr.length - 1);
    if (pivot > 0 && target >= arr[0] && target <= arr[pivot-1]) {
        return binarySearch(arr, target, 0, pivot - 1);
    }
    else {
        return binarySearch(arr, target, pivot, arr.length - 1);
    }
}
module.exports = findRotatedIndex