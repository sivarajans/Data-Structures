
function GetMaxHeap(a) {
    for (let i = Math.floor(a.length / 2) - 1; i >= 0; i--) {
        maxHeapIt(a, a.length, i);
    }
}


function maxHeapIt(a, n, i) {
    let max = i;
    let left = Math.floor(i * 2) + 1;
    let right = Math.floor(i * 2) + 2;

    if (left < n && a[left] > a[max]) {
        max = left;
    }
    if (right < n && a[right] > a[max]) {
        max = right;
    }
    if (max != i) {
        swap(a, max, i);
        maxHeapIt(a, n, max);
    }
}

function swap(a, i, j) {
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}


let givenTree = [15, 5, 20, 1, 17, 10, 30];
GetMaxHeap(givenTree);
console.log(givenTree);
