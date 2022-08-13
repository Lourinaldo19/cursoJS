// arr. indexOf(), lastIndexOf(), includes(), findIndex(), find()

let arr = [4, 5, 10, 20, 35, 4, 5]

console.log(arr. lastIndexOf(5))

console.log(arr.includes(5))

console.log(arr.find(function(ele){
    return ele > 10
}))


// retorna o indice do elemento maior que o elemento passado como parametro
console.log(arr.findIndex(function(ele){
    return ele > 10
}))