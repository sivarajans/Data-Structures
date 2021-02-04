

function HeapSort(a) {
    let sorted = [];

    while (a.length > 0) {
        // do min heap
        GetMinHeap(a);

        // swap last element to first and drop the root as it is the smallest one.
        swap(a, 0, a.length - 1);

        sorted.push(a.pop());
    }
    return sorted;
}

function GetMinHeap(a) {
    for (let i = Math.floor(a.length / 2) - 1; i >= 0; i--) {
        minHeapIt(a, a.length, i);
    }
}


function minHeapIt(a, n, i) {
    let min = i;
    let left = Math.floor(i * 2) + 1;
    let right = Math.floor(i * 2) + 2;

    if (left < n && a[left] < a[min]) {
        min = left;
    }
    if (right < n && a[right] < a[min]) {
        min = right;
    }
    if (min != i) {
        swap(a, min, i);
        minHeapIt(a, n, min);
    }
}

function swap(a, i, j) {
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}


let givenTree = [44, 22, 34, 66, 33, 17, 1, 0, 5];
let sorted = HeapSort(givenTree);

console.log('sorted', sorted);
