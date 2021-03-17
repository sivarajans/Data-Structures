"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MergeSort;

/*
Merge Sort - sorts an array by dividing each element as single element recursively and join them together and swapping at right postion.
*/
function MergeSort(a, lb, ub) {
  if (lb < ub) {
    //stop when index are equal.
    var mid = Math.floor((lb + ub) / 2);
    MergeSort(a, lb, mid);
    MergeSort(a, mid + 1, ub);
    divideAndConquer(a, lb, mid, ub);
  }
}

function divideAndConquer(a, lb, mid, ub) {
  var i = lb;
  var j = mid + 1;
  var k = lb;
  var sorted = [];

  while (i <= mid && j <= ub) {
    if (a[i] >= a[j]) {
      sorted[k] = a[j];
      j++;
    } else {
      sorted[k] = a[i];
      i++;
    }

    k++;
  } // remaining left side elements


  while (i <= mid) {
    sorted[k] = a[i];
    i++;
    k++;
  } //remaining right side elements


  while (j <= ub) {
    sorted[k] = a[j];
    j++;
    k++;
  } // copy to original array


  for (k = lb; k <= ub; k++) {
    a[k] = sorted[k];
  }
}