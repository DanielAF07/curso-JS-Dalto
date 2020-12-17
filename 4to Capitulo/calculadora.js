// Calculadora

const operar = operacion => {
    if(operacion.includes('+')){
        operacion = operacion.replace(' ', '').split('+')
        return(parseInt(operacion[0]) + parseInt(operacion[1]))
    }
    else if(operacion.includes('-')){
        operacion = operacion.replace(' ', '').split('-')
        return(parseInt(operacion[0]) - parseInt(operacion[1]))
    }
    else if(operacion.includes('/')){
        operacion = operacion.replace(' ', '').split('/')
        return(parseInt(operacion[0]) / parseInt(operacion[1]))
    }
    else if(operacion.includes('*') && operacion[operacion.indexOf('*')+1] != "*"){
        operacion = operacion.replace(' ', '').split('*')
        return(parseInt(operacion[0]) * parseInt(operacion[1]))
    }
    else if(operacion.includes('**')){
        operacion = operacion.replace(' ', '').split('**')
        return(parseInt(operacion[0]) ** parseInt(operacion[1]))
    }
    else if(operacion.startsWith("v")){
        operacion = operacion.replace(' ', '').replace("v","")
        return(Math.sqrt(parseInt(operacion)))
    }
    else if(operacion.startsWith("3v")){
        operacion = operacion.replace(' ', '').replace("3v","")
        return(Math.cbrt(parseInt(operacion)))
    }
    else {
        alert("Operacion desconocida")
    }
}

const calculadora = () => {
    let operacion = prompt("Que operación quieres hacer?\n(Incluir una sola operación)")

    alert(operar(operacion))
}

// calculadora()