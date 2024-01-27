// reusing the code in the previous exercise
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

function findRotationCount(arr) {
    let pivot = findPivot(arr, 0, arr.length);
    return pivot;
}
console.log(findRotationCount([7, 9, 11, 12, 15]));
module.exports = findRotationCount