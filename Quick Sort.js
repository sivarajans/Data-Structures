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

function quickSort(a, lb, ub) {
  if (lb < ub) {
    let pivotpos = quickMove(a, lb, ub);
    quickSort(a, lb, pivotpos -1);
    quickSort(a, pivotpos + 1, ub)
  }
}


//testing
let arg = [10, 2, 20, 5, 1, 2001, 3]
quickSort(arg, 0 , arg.length - 1);
