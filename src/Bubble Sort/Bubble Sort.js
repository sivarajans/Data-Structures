/*
Bubble Sort - Compare adjuscent elements and swap until sorted.
*/
export default function BubbleSort(a) {
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
