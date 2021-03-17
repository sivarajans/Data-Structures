"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = HeapSort;

/*
Heap Sort - Ascending Order Heap is used - Min Heap Invarient data structure.

1. Do min heap invarient structure.
2. Swap last element with root 
3. Pop last element (which is root) that has minimum value.

Zero Based Index Formula:
-----------------------------
All the parent = floor(n / 2) - 1 -- here n is total elements.

Child-1 of parent = 2i + 1 -- here i is index (0 based)
Child-2 of parent = 2i + 2
*/
function HeapSort(a) {
  var sorted = []; // first time to do min heap invarient
  // last parent index is n/2 - 1. doing for all parents here.

  GetMinHeap(a, Math.floor(a.length / 2) - 1);

  while (a.length > 0) {
    // swap last element to first and drop the root as it is the smallest one.
    swap(a, 0, a.length - 1);
    sorted.push(a.pop()); // do min heap only for first node as it is replaced with last node

    GetMinHeap(a, 0);
  }

  return sorted;
}

function GetMinHeap(a, parentIndex) {
  for (var i = parentIndex; i >= 0; i--) {
    minHeapIt(a, a.length, i);
  }
}

function minHeapIt(a, n, i) {
  var min = i;
  var left = Math.floor(i * 2) + 1;
  var right = Math.floor(i * 2) + 2;

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
  var temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}