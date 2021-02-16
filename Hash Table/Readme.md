# HashTable
It is a way to order data in an memory using the hash function and key.

Hash(x) - is a hash function, x is a key.
P(x) - is a probe function to fix when same index found used only in Open Addressing.

## Same key fix options

1. Seperate Chaining
    Using one of data structure to add more elements in same key - here we will use linked list.


2. Open Addressing [*NOT PROVIDED IN THE SOLUTION*]
    Open addressing searches for free index in array and fill it.
    There are 3 options available here.

    a. Linear probing 
        for ex: *ax + b* (a & b are constants)

    b. Quadratic probing
        for ex: *ax2 + bx + c* (a, b, c are constants)   

    c. Double hashing
        for ex: *h1(x) + h2(y)* (h1 & h2 are hashing on key and result respectively)


## Ways to eliminate cycles.

Maintain *Greatest Common Denominator(N, a) = 1*
where N - total elements, a - constant in h(x) = ax and Prime Numbers.

*Load Factor  = a / N*
when load factor reaches its limit, hastable needs to be resized to next set of prime numbers and values should refilled to maintain order.


## Installation
`npm i @sivarajans/hash-table`
Note - only seperate chaining available in this module
*/