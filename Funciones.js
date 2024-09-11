function mayusculas(palabra){
    return palabra.toUpperCase()
}

function minusculas(palabra){
    return palabra.toLowerCase()
}

function resta(a,b){
    return a - b
}

function division(a,b){
    if(b == 0){
        return "No se puede dividir por cero"
    }else{
        return a / b
    }
}

function multiplicacion(a,b){
    return a * b
}

function longitudString(palabra){
    return palabra.length
}