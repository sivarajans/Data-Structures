let input = [20, 23, 2, 567, 12, 1, 97];
console.log('given array', input);

function SelectionSort(a) {
    if (a.length <= 1) return;

    for (let i = 0; i < a.length; i++) {

        let j = i + 1;
        let minIndex = i;

        while (j < a.length) {
            if (a[minIndex] > a[j])
                minIndex = j;
            j++;
        }
        if (minIndex != i)
            swap(a, i, minIndex);
    }
}

function swap(a, i, j) {
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

SelectionSort(input);
console.log('selection sorted', input);
