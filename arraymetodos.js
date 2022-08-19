let numeros=[-5,100,200,5.5]

//agregar un nuevo elemento a mi arreglo
//PUSH
numeros.push(10)
console.log(numeros)

//recorriendo un arreglo
numeros.forEach(numero=>console.log(numero))

//Filtrar el arreglo
let filtro=numeros.filter(numero=>numero>=100)
console.log(filtro)

//buscar elemento en un array
let buscado=numeros.find(function(numero){
    return numero>10
})
console.log(buscado)

//buscar elemnto de otra manera
let ubicado=numeros.some(numero=>numero==100)
console.log(ubicado)

//RECORRIENDO Y MODIFICANDO ARREGLOS AL MISMO TIEMPO
let mapa=numeros.map(function(numero){
    return(numero=numero+1)
})
console.log(mapa)