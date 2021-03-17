"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RadixSort;

/*
Radix Sort - used to sort array using radix position. 
Sorting applied from LSB to MSB here as given is integer.
Same can be done for string from MSB to LSB.
*/
function RadixSort(a) {
  if (a.length <= 1) return; // max length in an array for radical position movement

  var maxlen = findMaxLength(a);
  var radicalPosDivider = 1;

  do {
    // radix passes
    radixPass(a, radicalPosDivider);
    radicalPosDivider *= 10.0;
    maxlen -= 1;
  } while (maxlen > 0);
}

function radixPass(a, radixPosition) {
  var counter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // counter for 0 - 9 position store.

  for (var i = 0; i < a.length; i++) {
    var rem = getRadicalValue(radixPosition, a[i]);
    counter[rem] += 1;
  } // as per counter sort


  incrementCounter(counter);
  var radixSorted = [];

  for (var _i = a.length - 1; _i >= 0; _i--) {
    var _rem = getRadicalValue(radixPosition, a[_i]);

    counter[_rem] -= 1; //reduce one count 

    radixSorted[counter[_rem]] = a[_i];
  } // copy sorted to original array


  for (var _i2 = 0; _i2 < radixSorted.length; _i2++) {
    a[_i2] = radixSorted[_i2];
  }
}

function incrementCounter(counter) {
  for (var i = 1; i < counter.length; i++) {
    counter[i] = counter[i - 1] + counter[i];
  }
}

function findMaxLength(a) {
  var maxLen = 1;

  for (var i = 0; i < a.length; i++) {
    if (a[i].toString().length > maxLen) maxLen = a[i].toString().length;
  }

  return maxLen;
}

function getRadicalValue(radical, input) {
  var radPosValue = parseInt(input % (radical * 10) / radical);
  return radPosValue;
}