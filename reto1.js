let peliculas=[
    {nombre:'Harry Potter',genero:'Ciencia Ficcion',costo:2000},
    {nombre:'Dragon Ball Super',genero:'Anime',costo:3000},
    {nombre:'Wakanda Forever',genero:'Ciencia Ficcion',costo:5000},
    {nombre:'Django Sin Cadenas',genero:'Ciencia Ficcion',costo:1500},
    {nombre:'El Viaje Del Chigui',genero:'Anime',costo:60}]

/*let filtro=peliculas.filter(pelicula=>pelicula.genero=='Ciencia Ficcion')
console.log(filtro)

let filtro1=peliculas.filter(pelicula=>pelicula.costo>2000)
console.log(filtro1)

//PELICULA QUE SEA DE ANIMA Y VALGA 3000
let filtro3=peliculas.filter(pelicula=>pelicula.genero=='Anime');
let busqueda1 = filtro3.find(busco=>busco.costo==3000)
console.log(busqueda1);

let filtro4=peliculas.map(function(pelicula){
    return pelicula.costo=pelicula.costo/1000
})
console.log(peliculas)*/

let filtro5=peliculas.map(function(pelicula){
    return pelicula.nombre='Daniel'
})
console.log(peliculas)