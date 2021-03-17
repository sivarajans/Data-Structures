/*
Quick Sort - sorts the array using the pivot position.
we can choose any one value as pivot, here I have chosen first element as pivot.
*/
export default function QuickSort(a, lb, ub) {
  if (lb < ub) {
    
    // Returns the pivot position index that is moved to right position
    let pivotpos = quickMove(a, lb, ub);
    
    // Now move other elements in array other than pivot position recursively.
    QuickSort(a, lb, pivotpos -1);
    QuickSort(a, pivotpos + 1, ub)
  }
}

function quickMove(a, lb, ub) {
  let start = lb;
  let end = ub;
  let pivot = a[lb];

 while(start < end) { 
  while(a[start] <= pivot) start++;
  while(pivot < a[end]) end--;
  
  if (start < end) {
   swap(a, start , end);
  }
 }
 //move pivot to end
 swap(a, lb , end);
 return end;
}


function swap(a, i , j) {
 let temp = a[i];
 a[i] = a[j];
 a[j] = temp;
}


