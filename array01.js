//arr. every(), some(), forEache(), map(), filter()

const arr = [1, 5, 10, "ola", true]

let soNumeros = arr.some(function(ele){
    return typeof ele === "number"
})

let arr1 = arr.filter(function (ele, i, _arr){
    return typeof ele === "number"
})

arr.forEach(function (ele, i){
    console.log(i,":", ele)
})

let arr2 = arr1.map(function(ele, i, _arr){
    return ele * ele
})

console.log(arr)
console.log(arr1)
console.log(arr2)

