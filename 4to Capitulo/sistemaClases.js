
let materias = {
    Control: {
        clase: "Control",
        profesor: "Matías Segura",
        alumnos: ["Pedro", "Marcos", "David", "Jonás", "Cofla"]
    },        
    Logica: {
        clase: "Logica",
        profesor: "Rolando Lopez",
        alumnos: ["Pedro", "Marcos", "David", "Jonás", "Pablo"]
    },       
    Programacion: {
        clase: "Programacion",
        profesor: "Mariana Sepulveda",
        alumnos: ["Pedro", "Marcos", "Cofla", "Jonás"]
    },        
    Optativa: {
        clase: "Optativa",
        profesor: "Omar Barrera",
        alumnos: ["Pedro", "Marcos", "David", "Simón", "Cofla"]
    }
}

const obtenerInfo = materia => {
    if(materia in materias){
        return materias[materia]
    } else {
        return false
    }
}

const mostrarInformacion = materia => {    
    let infoMateria = obtenerInfo(materia)
    if(infoMateria){
        document.write(`<h3>${infoMateria['clase']}</h3>Profesor: <b>${infoMateria['profesor']}</b><br>Alumnos:<br>${infoMateria['alumnos'].join('<br>')}<br>`)
    }
    else {
        document.write("Materia no encontrada")
    }
}

const obtenerHorario = alumno => {
    let clases = []
    for(let materia in materias){
        if(materias[materia]["alumnos"].includes(alumno)){
            clases.push(materias[materia])
        }
    }
    return clases
}

const mostrarHorario = alumno => {
    let horario = obtenerHorario(alumno)
    document.write(`${alumno} está en <b>${horario.length}</b> clases<br>`)
    for(let clase of horario){
    document.write(`<b style="color: blue">${clase['clase']}</b> con el profesor@ <b>${clase['profesor']}</b><br>`)
}

}

mostrarHorario("Cofla")
let horarioMarcos = obtenerHorario("Cofla")
for(let materia of horarioMarcos){
    mostrarInformacion(materia['clase'])
}