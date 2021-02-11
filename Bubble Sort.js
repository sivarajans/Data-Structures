let input = [20, 23, 2, 567, 12, 1, 97, 25, 15, 3, 8];
console.log('given array', input);

function BubbleSort(a) {
    if (a.length <= 1) return;
    let iterationTaken = 0;
    let swapped;

    do {
        iterationTaken += 1;
        swapped = false;

        for (let i = 1; i < a.length; i++) {

            if (a[i - 1] > a[i]) {
                swap(a, i - 1, i);
                swapped = true;
            }
        }

    } while (swapped);

    return iterationTaken;
}

function swap(a, i, j) {
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

let it = BubbleSort(input);
console.log('bubble sorted', input);
console.log('iteration taken', it);
