"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = QuickSort;

/*
Quick Sort - sorts the array using the pivot position.
we can choose any one value as pivot, here I have chosen first element as pivot.
*/
function QuickSort(a, lb, ub) {
  if (lb < ub) {
    // Returns the pivot position index that is moved to right position
    var pivotpos = quickMove(a, lb, ub); // Now move other elements in array other than pivot position recursively.

    QuickSort(a, lb, pivotpos - 1);
    QuickSort(a, pivotpos + 1, ub);
  }
}

function quickMove(a, lb, ub) {
  var start = lb;
  var end = ub;
  var pivot = a[lb];

  while (start < end) {
    while (a[start] <= pivot) {
      start++;
    }

    while (pivot < a[end]) {
      end--;
    }

    if (start < end) {
      swap(a, start, end);
    }
  } //move pivot to end


  swap(a, lb, end);
  return end;
}

function swap(a, i, j) {
  var temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}