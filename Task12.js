// 1. extract first five letters from a string (' gfuh ieiuei ')
var string = ' gfuh ieiuei '
console.log(string.replace(/\s/g, '').slice(0,5))  // '/\s/g' targets all whitespace character



// 2. get the length of a string and make it uppercase ('hduej dij')
var string = 'hduej dij'
console.log('length of "hduej dij" = ', string.length)
console.log(string.toUpperCase())



// 3. take a string, make it lowercase and trim it (' biji jdo ')
var string = ' biji jdo '
console.log(string.toLowerCase())
console.log(string.trim())



// 4. replace specified word in a string ('', '')
var string = '5'
console.log(string.replace('5', 'A'))


// 5. random statements in implicit coercion e.g. (89 + 'hello' + 90 / 9)
console.log(89 + 'hello' + 90 / 9)

console.log(true + '5')
console.log(null + '5')
console.log(undefined + '5')

console.log(true + 5)
console.log(null + 5)
console.log(false + 5)
console.log(undefined + 5)