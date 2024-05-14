/*

    OBJECT

    - Unordered collection of key-value pairs. The key must be string or symbol type
    - Use the key to retrive a value by dot or bracket notation
    - Not iterable, does not accept for of loop

*/

const obj = {
    name: 'Helena',
    age: 20,
    sayMyName: function() {
        console.log(this.name)
    }
}

console.log(obj)

// We can access values by key
console.log(obj.name)
console.log(obj['name'])

// Add new object entry
obj.profession = 'teacher'
console.log(obj)

// Delete entry
delete obj.profession
console.log(obj)

// You can add functions that refers to obj values
obj.sayMyName()

// Other methods => Object.keys(), .values(), .entries()


/* 

    TIME COMPLEXITY
    O(1) = constant
    O(n) = linear

    insert / remove / access = O(1) 
    search = O(n)
    Object.keys() = O(n)
    Object.values() = O(n)
    Object.entries() = O(n)

*/

