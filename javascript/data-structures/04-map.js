/*

    MAP

    - Can contain a mix of data types
    - Maintain insertion order
    - Use the key to retrive a value 
    - Iterables, does accept for of loop


    OBJECT VS MAP
    - Object are unordered collection where Map is ordered
    - Keys in Objects can only be string or symbol type where in map can be any type
    - An object has some default keys that may coollide with your keys if you are not careful. A map does not contain any default keys
    - Object are not iterables, where map is
    - The number of items in Objects must be determined manually where in map is available though size property
    - In map you cann only store data, where in object can store functionalities like functions
*/

const map = new Map([['a', 1], ['b', 2], ['c', 3]])

for(const [key, value] of map){
    console.log(`${key}: ${value}`)
}

// Add element
map.set('d', 4)
console.log(map)

// Remove element
map.delete('c')
console.log(map)

// Verify if element exist in map
console.log(map.has('a'))

// Verify map size
console.log(map.size)

// Remove all elements from map
map.clear()