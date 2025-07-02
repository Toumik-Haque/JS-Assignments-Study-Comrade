// 1. create an object for animal, car.
const animal = {
    name: "Tiger",
    species: "Panthera tigris"
}

const car = {
    brand: "Suzuki",
    model: "Maruti",
    color: "White"
}



// 2. find the duplicate in a string() (use array) - optional
var duplicate = []
var string = "INDIA IS MY NATION"
var arr = string.replace(/\s/g, '').split('')
arr.forEach(ele => {
    if(arr.indexOf(ele) !== arr.lastIndexOf(ele)){
        if(duplicate.includes(ele) == false) {
            duplicate.push(ele)
        }
    }
});
console.log(duplicate)




// 3. reverse a string (use array method)
var str = 'abcd'
var arr = str.split('')
var revStr = ''

arr.forEach(ele => {
    revStr = ele+revStr
});

console.log(revStr)



// 4. find the highest and lowest value in array

var arr =[25,46,54,54,65,14,98]
console.log(Math.max(...arr)) // highest value
console.log(Math.min(...arr)) // lowest value

// for array we have to use 'spread operator (...)'



// 5. sorting of an array - optional
console.log(arr.sort((a,b) => a-b)) // ascending
console.log(arr.sort((a,b) => b-a)) // descending



// 6. display first 3 elements in an array in UI
console.log(arr.slice(0,3))



// 7. remove 4th (index) element and add 2 element there
var arr = [1, 2, 3, 4, 5, 6]
arr.splice(3,1,20,30)
console.log(arr)