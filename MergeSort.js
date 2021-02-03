function mergeSort(a, lb, ub) {
   if (lb < ub) {
       let mid = Math.floor((lb + ub) / 2);
       mergeSort(a, lb, mid);
       mergeSort(a, mid+1, ub);   
       divideConquer(a, lb, mid, ub);
   }  

}

function divideConquer(a, lb, mid, ub){
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

 while ( i <= mid ) { 
   sorted[k] = a[i];
   i++; k++;
 }
 while (j <= ub)
 { 
   sorted[k] = a[j];
   j++; k++;
 }
 console.log(sorted);
 for(k=lb; k <= ub; k++)
   a[k] = sorted[k];
}


//testing
let arg = [10, 2, 20, 5, 1, 2001, 3]
mergeSort(arg, 0 , arg.length - 1);
