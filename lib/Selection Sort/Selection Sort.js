"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SelectionSort;

/*
Selection Sort - sorts an array by looking the minimum value's index and swapping to left position, and continue until last index recursively.
*/
function SelectionSort(a) {
  if (a.length <= 1) return;

  for (var i = 0; i < a.length; i++) {
    var j = i + 1;
    var minIndex = i;

    while (j < a.length) {
      if (a[minIndex] > a[j]) minIndex = j;
      j++;
    }

    if (minIndex != i) swap(a, i, minIndex);
  }
}

function swap(a, i, j) {
  var temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}