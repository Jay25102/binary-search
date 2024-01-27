function findFloor(arr, target, start = 0, end = arr.length - 1) {
    if (arr[0] > target) {
        return -1;
    }
    if (target >= arr[end]) {
        return arr[end];
    }

    if (end >= start) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            return arr[mid];
        }
        if (mid > 0 && arr[mid-1] <= target && target < arr[mid]) {
            return arr[mid - 1];
        }
        else if (target < arr[mid]) {
            return findFloor(arr, target, mid + 1, end);
        }
        else {
            return findFloor(arr, target, start, mid - 1);
        }
    }
    return -1;
}
module.exports = findFloor