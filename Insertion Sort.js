let input = [20, 23, 2, 567, 12, 1, 97];
console.log('given array', input);

function InsertionSort(a) {
    if (a.length == 0) return;

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

InsertionSort(input);
console.log('insertion sorted', input);
