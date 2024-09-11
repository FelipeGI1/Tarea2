const persona = {
    nombre: 'Felipe',
    edad: 21,
    genero: 'Masculino'
}

console.log("Nombre: " + persona.nombre)
console.log("Edad: " + persona.edad)
console.log("Género: " + persona.genero)

const caja = {
    cuadernos: 5,
    lapices: 10,
    papeles: 100,
    fotografias: 5,
    buenEstado: true
}

console.log(caja)

console.log("Cuadernos: " + caja.cuadernos)
console.log("Lápices: " + caja.lapices)
console.log("Papeles: " + caja.papeles)
console.log("Fotografías: " + caja.fotografias)
if(caja.buenEstado == true){
    console.log("La caja esta en buen estado")
}else{
    console.log("La caja esta en mal estado")
}

console.log("Tipo de dato de Cuadernos: " + typeof(caja.cuadernos))
console.log("Tipo de dato de Lápices: " + typeof(caja.lapices))
console.log("Tipo de dato de Papeles: " + typeof(caja.papeles))
console.log("Tipo de dato de Fotografías: " + typeof(caja.fotografias))
console.log("Tipo de dato del estado: " + typeof(caja.buenEstado))