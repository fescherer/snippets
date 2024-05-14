/*

    SET

    - Hold a collection of UNIQUE values
    - Can contain a mix of data types
    - Dynamically sized. Resizable. You do not need to specify the size before creating
    - Do not maintain insertion order
    - Iterables, does accept for of loop


    SET VS ARRAY
    - Array can contain duplicated values, where set not
    - Insertion order is maintained in arrays, where set not
    - Searching and deleting element in set is faster than array
*/

const set = new Set([1,2,3])

// Unique value
set.add(4)
set.add(4)

for(const item of set) {
    console.log(item)
}

// Verify if value is in set
console.log(set.has(4))

// Delete value
set.delete(3)
console.log(set)

// Check the size of set
console.log(set.size)

// Remove all elements
set.clear()
