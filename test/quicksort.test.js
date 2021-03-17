import QuickSort from '../src/Quick Sort/Quick Sort';

//testing
let arg = [10, 2, 20, 5, 1, 2001, 3];
console.log('given array', arg);

QuickSort(arg, 0 , arg.length - 1);
console.log('Quick sorted', arg);