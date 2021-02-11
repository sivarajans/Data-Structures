/*
Merge Sort - sorts an array by dividing each element as single element recursively and join them together and swapping at right postion.
*/
function mergeSort(a, lb, ub) {
   if (lb < ub) { //stop when index are equal.
       let mid = Math.floor((lb + ub) / 2);
       mergeSort(a, lb, mid);
       mergeSort(a, mid+1, ub);   
       divideAndConquer(a, lb, mid, ub);
   }  

}

function divideAndConquer(a, lb, mid, ub){
  let i = lb;
  let j = mid + 1;
  let k = lb;
  let sorted = [];

 while(i <= mid && j <= ub) {
  if (a[i] >= a[j])
    {
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
 while ( i <= mid ) { 
   sorted[k] = a[i];
   i++; k++;
 }
   
 //remaining right side elements
 while (j <= ub)
 { 
   sorted[k] = a[j];
   j++; k++;
 }

 // copy to original array
 for(k=lb; k <= ub; k++)
   a[k] = sorted[k];
}


//testing
let arg = [10, 2, 20, 5, 1, 2001, 3]
mergeSort(arg, 0 , arg.length - 1);
