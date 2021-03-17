/*
Insertion Sort - sorts the array by comparing each element and moving back by swapping until right position reached.
*/

export default function InsertionSort(a) {
    if (a.length <= 1) return;

    for (let i = 1; i < a.length; i++) {
        let j = i;
        while (j > 0) {
            if (a[j - 1] > a[j])
                swap(a, j - 1, j);

            else if (a[j - 1] <= a[j])
                break;

            j--;
        }
    }
}

function swap(a, i, j) {
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}


