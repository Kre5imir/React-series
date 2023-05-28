let arr = [2,3,5,7,9,11]

let obj = [{

    x: 1,
    y: 2
},
{
    x: 3,
    y: 4
}]

let getArray = arr.map(item => {
    if(item%3 === 0)
        console.log(item)
})

let getKeys = obj.map(item => {
    if (item ) 
        console.log(item.x * 3)
})
let findValues = arr.map( item => item > 2 )

console.log(findValues)
