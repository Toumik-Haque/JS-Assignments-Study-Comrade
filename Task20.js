// ▪ Advance JavaScript (ES6): 
// const and let keywords, arrow function, classes, advance operators
// (spread & rest operators) array helper functions ( map, 
// filter, some ,every, forEach)

// Task 20:
// 1. get the value of the first element in an array that has value greater than 20
var arr = [18, 20, 16, 24, 30, 15]

// Using filter
var data = arr.filter(ele => {
    return ele > 20;
})
// console.log(data) // show array of all (ele > 20)
console.log(data[0]) // show only 0th ele from above array of all (ele > 20)

// Using find
var data = arr.find(ele => {
    return ele > 20;
})
console.log(data) // show only 1st (ele > 20)




// 2. get the value of the first element in an array that has value less than 20
var arr = [30, 21, 12, 0]
var data = arr.find(ele => {
    return ele < 20;
})
console.log(data)




// 3. filter data based on a id(property) in an array of objects: pick any random id value
var arr = [
    {
        id : 1,
        name : 'Toumik',
        age : 22
    },

    {
        id : 2,
        name : 'Mijanul',
        age : 52
    },

    {
        id : 3,
        name : 'Tuhina',
        age : 50
    }
]

var pickedId = 2

var data = arr.filter(ele => {
    return ele.id == pickedId;
})
console.log(data)




// 4. check element is odd or even in an array [90, 89, 56, 45]
var arr = [90, 89, 56, 45]
arr.forEach(ele => {
    const eleType = ele % 2 === 0 ? "Even" : "Odd"
    console.log(ele + " is " + eleType)               // console.log(`${ele} is ${eleType}`)
})



// 5. create a class Book: type_of_book(), no. of pages, type of pages, author
class Book {

    constructor(noOfPages, typeOfPages, author){
        
        this.noOfPages = noOfPages        // make 'noOfPages'   globally usable by 'this.noOfPages'
        this.typeOfPages = typeOfPages    // make 'typeOfPages' globally usable by 'this.typeOfPages'
        this.author = author              // make 'author'      globally usable by 'this.author'
    }

    type_of_book(){
        console.log("This is", this.noOfPages > 300 ? "Nobel" : "Short Story", "book.")
    }

    // pageCount(){
    //     console.log(`The book has ${this.noOfPages} pages.`)
    // }

    // pageType(){
    //     console.log(`The book pages are ${this.typeOfPages} type.`)
    // }

    // bookAuthor(){
    //     console.log(`The book was written by ${this.author}.`)
    // }
}

const myBook1 = new Book(150, 'matte', 'Rabindranath Tegore')
myBook1.type_of_book()
// myBook1.pageCount()
const myBook2 = new Book(350, 'matte', 'Bankim Chandra Chattopadhyay')
myBook2.type_of_book()
// myBook2.bookAuthor()




// 6. create a class Animal: walk(), eat(), climb(), gender, name, disease
class Animal{

    constructor(gender, name, disease){
        this.gender = gender
        this.name = name
        this.disease = disease
    }

    walk(){
        console.log(`The ${this.gender} ${this.name} is walking.`)
    }

    eat(){
        console.log(`The ${this.gender} ${this.name} is eating.`)
    }

    climb(){
        console.log(`The ${this.gender} ${this.name} is climbing.`)
    }
}

const animalData = new Animal("male", "cat", "none")

animalData.walk()
animalData.eat()
animalData.climb()