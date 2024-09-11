const numbers = [1, 2, 3, 4, 5]
const cadenas = ["hola", "mundo", "como", "estas"]

function sumarNumeros(numeros){
    let suma = 0
    for(let i = 0; i < numeros.length; i++){
        suma += numeros[i]
    }
    return suma
}

function promedioNumeros(numeros){
    let suma = 0
    for(let i = 0; i < numeros.length; i++){
        suma += numeros[i]
    }
    return suma / numeros.length
}

function arrayMayusculas(palabras){
    let palabrasMayusculas = []
    for(let i = 0; i < palabras.length; i++){
        palabrasMayusculas.push(palabras[i].toUpperCase())
    }
    return palabrasMayusculas
}

function arrayPares(numeros){
    let numerosPares = []
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 === 0){
            numerosPares.push(numeros[i])
        }
    }
    return numerosPares
}

sumarNumeros(numbers)
promedioNumeros(numbers)
arrayMayusculas(cadenas)
arrayPares(numbers)