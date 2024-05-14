/*

    ARRAYS

    - Can hold a collection of values
    - Can contain a mix of data types
    - Dynamically sized. Resizable. You do not need to specify the size before creating
    - Are zero indexed and insertion order is mantained
    - Iterables, does accept for of loop

*/

const arr = [1,2, 'fennec', true]
console.log(arr)
arr.push(3) // Add element at end of the array
arr.unshift('first element') // Add element at beginning of the array
console.log(arr)

arr.pop() // Removes the last element
arr.shift() // Removes the first element
console.log(arr)

for(const item of arr) {
    console.log(item)
}

// Other methods => filter, map, reduce, concat, slice and splice


/* 

    TIME COMPLEXITY
    O(1) = constant
    O(n) = linear

    insert / remove from end = O(1) 
    inser / remove from beginning = O(n) 
    access element = O(1) 
    search = O(n)
    push / pop = O(1)
    shift / unshift / concat / slice / splice = O(n)
    forEach / map / filter / reduce = O(n)


*/
