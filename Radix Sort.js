/*
Radix Sort - used to sort array using radix position. 
Sorting applied from LSB to MSB here as given is integer.
Same can be done for string from MSB to LSB.
*/

let input = [20, 23, 2, 567, 12, 1, 97, 324333, 25, 15, 3, 8];

console.log('given array', input);

function RadixSort(a) {
    if (a.length <= 1) return;

    // max length in an array for radical position movement
    let maxlen = findMaxLength(a);
    let radicalPosDivider = 1;
    do {
        // radix passes
        radixPass(a, radicalPosDivider);

        radicalPosDivider *= 10.0;
        maxlen -= 1;
    } while (maxlen > 0)
}

function radixPass(a, radixPosition) {
    let counter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // counter for 0 - 9 position store.
    for (let i = 0; i < a.length; i++) {
        let rem = getRadicalValue(radixPosition, a[i]);
        counter[rem] += 1;
    }

    // as per counter sort
    incrementCounter(counter);

    let radixSorted = [];
    for (let i = a.length - 1; i >= 0; i--) {
        let rem = getRadicalValue(radixPosition, a[i]);

        counter[rem] -= 1; //reduce one count 
        radixSorted[counter[rem]] = a[i];
    }

    // copy sorted to original array
    for (let i = 0; i < radixSorted.length; i++) {
        a[i] = radixSorted[i];
    }

}


function incrementCounter(counter) {
    for (let i = 1; i < counter.length; i++) {
        counter[i] = counter[i - 1] + counter[i];
    }
}

function findMaxLength(a) {
    let maxLen = 1;
    for (let i = 0; i < a.length; i++) {
        if (a[i].toString().length > maxLen)
            maxLen = a[i].toString().length;
    }
    return maxLen;
}


function getRadicalValue(radical, input) {
    let radPosValue = parseInt(input % (radical * 10) / radical);
    return radPosValue;
}

RadixSort(input);
console.log('radix sorted', input);

