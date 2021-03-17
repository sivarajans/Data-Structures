"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=HeapSortDesc;function HeapSortDesc(a){var sorted=[];for(GetMaxHeap(a,Math.floor(a.length/2)-1);0<a.length;)swap(a,0,a.length-1),sorted.push(a.pop()),GetMaxHeap(a,0);return sorted}function GetMaxHeap(a,parentIndex){for(var i=parentIndex;0<=i;i--)maxHeapIt(a,a.length,i)}function maxHeapIt(a,n,i){var max=i,left=Math.floor(2*i)+1,right=Math.floor(2*i)+2;left<n&&a[left]>a[max]&&(max=left),right<n&&a[right]>a[max]&&(max=right),max!=i&&(swap(a,max,i),maxHeapIt(a,n,max))}function swap(a,i,j){var temp=a[i];a[i]=a[j],a[j]=temp}