"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = InsertionSort;

/*
Insertion Sort - sorts the array by comparing each element and moving back by swapping until right position reached.
*/
function InsertionSort(a) {
  if (a.length <= 1) return;

  for (var i = 1; i < a.length; i++) {
    var j = i;

    while (j > 0) {
      if (a[j - 1] > a[j]) swap(a, j - 1, j);else if (a[j - 1] <= a[j]) break;
      j--;
    }
  }
}

function swap(a, i, j) {
  var temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}