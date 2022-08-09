/*
Merge Sort - sorts an array by dividing each element as single element recursively and join them together and swapping at right postion.
*/
export default function MergeSort(a, lb, ub) {
  if (lb < ub) { //stop when index are equal.
    let mid = Math.floor((lb + ub) / 2);
    MergeSort(a, lb, mid);
    MergeSort(a, mid + 1, ub);
    divideAndConquer(a, lb, mid, ub);
  }

}

function divideAndConquer(a, lb, mid, ub) {
  let i = lb;
  let j = mid + 1;
  let k = lb;
  let sorted = [];

  while (i <= mid && j <= ub) {
    if (a[i] >= a[j]) {
      sorted[k] = a[j];
      j++;
    }
    else {
      sorted[k] = a[i];
      i++;
    }
    k++;
  }

  // remaining left side elements
  while (i <= mid) {
    sorted[k] = a[i];
    i++; k++;
  }

  //remaining right side elements
  while (j <= ub) {
    sorted[k] = a[j];
    j++; k++;
  }

  // copy to original array
  for (k = lb; k <= ub; k++)
    a[k] = sorted[k];
}



//Another version
// function mergeSort(array, start, end) {
//     if (start == end) return;
//     let mid = Math.floor((end - start) / 2) + start;
    
//     mergeSort(array, start, mid);
//     mergeSort(array, mid + 1, end)
//     divideAndConquer(array, start, mid, end);
// }

// function divideAndConquer(array, start, mid, end) {
//     let i = start;
//     let j = mid + 1;
//     let ordered = [];
//     let orderedIx = start;
//     while(i <= mid && j <= end) {
        
//         if (array[i] > array[j]) {
//             ordered[orderedIx++] = array[j++];
//         }
//         else { 
//             ordered[orderedIx++] = array[i++];
//         }
//     }
//     while(i <= mid) {
//         ordered[orderedIx++] = array[i++];
//     }
//     while(j <= end) {
//         ordered[orderedIx++] = array[j++];
//     }

//     //copy to array
//     for(let m = start; m <= end; m++) {
//         array[m] = ordered[m];
//     }
// } 

// function swap(array, i, j) {
//     let t = array[i];
//     array[i] = array[j];
//     array[j] = t;
// }



// let source = [10, 20 ,30, 5, 15, 25, 1, 0, 233];
// mergeSort(source, 0, source.length - 1);
// console.log(source);
