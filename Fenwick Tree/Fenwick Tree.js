/*
Fenwick Tree - general tree used for range queries.
it works with bits for positional sum storage. 

the highest element responsible can be found using 
Bits(n) + Least Significant Bits(n);


same way the lowest element responsible for range query can be found using
Bits(n) - Least Significant Bits(n);

Below example is Index 1 based.
*/

export default class FenWickTree {
    // array of elements to add in initial fenwick tree.
    constructor(array) {

        // fenwick array - just copying real array before construct
        this.fenwick = [0].concat(array); // first position is dummy 0.

        this._construct();
    }

    // add more value at index.
    add(index, value) {

        while (index < this.fenwick.length) {
            this.fenwick[index] += value;
            index += this._getLSB(index);
        }
    }

    // set disired value at index
    set(index, value) {

        let currentSum = this.rangeSum(index, index);
        let propogate = value - currentSum;

        this.add(index, propogate);
    }

    prefixSum(untilIndex) {
        let sum = 0;
        while (untilIndex > 0) {
            sum += this.fenwick[untilIndex];
            untilIndex -= this._getLSB(untilIndex);
        }
        return sum;
    }

    rangeSum(fromIndex, toIndex) {
        return this.prefixSum(toIndex) - this.prefixSum(fromIndex - 1);
    }

    _construct() {
        for (let i = 1; i < this.fenwick.length; i++) {
            let j = i + this._getLSB(i);
            if (j < this.fenwick.length)
                this.fenwick[j] += this.fenwick[i];
        }
    }

    _getLSB(pos) {
        return pos & -pos;
    }

}