// 1. display even numbers upto n number (ask user for number)
// Check 'Task16.1.html' file for answer



// 2. ask user for the input, whether char is vowel or consonant
// Check 'Task16.2.html' file for answer



// 3. count of even and odd number from 1 to 999

var even = 0
var odd = 0
for(var i=1; i<=999; i++){
    if(i%2===0){
        even = even + 1;
    }
    else{
        odd = odd + 1;
    }
}

console.log("Count of even: "+even);
console.log("Count of odd: "+odd);



// 4. count occurrence of a particular character in a string (hello: count of l is 2): loops
var string = "INIDA IS MY NATION" // Check count of 'I'
var count = 0
string = string.replace(/\s/g, '')
var arr = string.split('')

arr.forEach(ele => {
    if (ele === 'I') {
        count = count+1
    }
})
console.log("Count of 'I': "+count)



// 5. sum and average of array elements [1, 9, 8];
var arr = [1, 9, 8]
var sum = 0
arr.forEach(ele => {
    sum = sum + ele
})
console.log("Sum of array elements: "+sum)
console.log("Average of array elements: "+(sum / arr.length))



// 6. largest number in an array (do with loops)
var largest = 0
arr.forEach(ele => {
    if(ele >= largest){
        largest = ele
    }
})
console.log("Largest number is: "+largest)  // largest

// var smallest = largest          // find smallest of array with loop
// arr.forEach(ele => {
//     if(ele <= smallest){
//         smallest = ele
//     }
// })
// console.log("Lowest number is: "+smallest)  // smallest