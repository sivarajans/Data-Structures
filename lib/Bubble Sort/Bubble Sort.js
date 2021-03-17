"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = BubbleSort;

/*
Bubble Sort - Compare adjuscent elements and swap until sorted.
*/
function BubbleSort(a) {
  if (a.length <= 1) return;
  var iterationTaken = 0;
  var swapped;

  do {
    iterationTaken += 1;
    swapped = false;

    for (var i = 1; i < a.length; i++) {
      if (a[i - 1] > a[i]) {
        swap(a, i - 1, i);
        swapped = true;
      }
    }
  } while (swapped);

  return iterationTaken;
}

function swap(a, i, j) {
  var temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}