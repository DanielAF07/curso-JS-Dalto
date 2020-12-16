let hora = "1AM"
let afortunado = false

const puedePasar = edad => {
    if(edad >= 18) {
        return true
    }
    else {
        return false
    }
}

const personaEntra = edad => {
    if(puedePasar(edad)){
        if(hora == "2AM" && !afortunado) {
            alert(`Adelante, pasa. Eres el afortunado asi que no pagas por entrar\nEdad: ${edad}`)
            afortunado = true
        }
        else {
            alert(`Adelante, pasa. Son 2 dolares\nEdad: ${edad}`)
        }
    }
    else {
        alert(`Me parece que esa identificacion es falsa\nEdad: ${edad}`)
    }
}

const registrarAlumno = nombre => {
    let alumno = {
        nombre: nombre,
        asistencia: 0,
        faltas: 0
    }
    return alumno
}

const tomarAsistencia = (alumno, dia) => {
    let presencia = prompt(`DIA ${dia}\nEl alumno ${alumno["nombre"]} asistió a clase?\n(P) Presente  (A) Ausente`).toLowerCase()
    if(presencia == 'p'){
        alumno["asistencia"]++
    }
    else if(presencia == 'a'){
        alumno["faltas"]++
    }
}

const darStatus = alumno => {
    let pcg = (alumno["asistencia"] + alumno["faltas"]) * alumno["faltas"]
    if(pcg > 10){
        alert(`El alumno ${alumno['nombre']} está reprobado por faltas!`)
        alumno["aprobado"] = false
    }
    else {
        alert(`El alumno ${alumno['nombre']} tiene sus puntos completos de asistencia`)
        alumno["aprobado"] = true
    }
}

const practicaSistemaAsistencia = () => {
    let cantidad = prompt("Cuantos alumnos son?")
    let dias = prompt("Cuantos dias tomaremos asistencia?")
    let alumnosTotales = []
    //Registrar nuevos alumnos
    for(let i = 0; i < cantidad; i++){
        alumnosTotales.push(registrarAlumno(prompt(`Nombre del alumno ${i+1}`)))
    }
    //Tomar asistencia por los dias necesarios
    for(let i = 0; i < dias; i++){
        for(alumno of alumnosTotales){
            tomarAsistencia(alumno, i+1)
        }
    }
    //Dar status al final
    for(alumno of alumnosTotales){
        darStatus(alumno)
    }
}

practicaSistemaAsistencia()