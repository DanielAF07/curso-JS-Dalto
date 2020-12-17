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
        alumnos: ["Pedro", "Marcos", "Cofla", "Jonás", "Esther", "Susy", "Armando", "Alexis", "Carlos", "Rogelio", "Andrea", "Mariana", "Carlos", "Rogelio", "Andrea", "Mariana", "Carlos", "Rogelio", "Andrea", "Mariana"]
    },        
    Optativa: {
        clase: "Optativa",
        profesor: "Omar Barrera",
        alumnos: ["Pedro", "Marcos", "David", "Simón", "Cofla"]
    }
}

const inscribir = (alumno, materia) => {
    if(!materias[materia]){
        return -1
    } else if(materias[materia]['alumnos'].length >= 21){
        return false
    } else {
        materias[materia]['alumnos'].push(alumno)
        return true
    }
}

let resultado = inscribir("Daniel", "Programacion")
if(resultado == true){
    document.write("Alumno registrado con exito")
} else if(!resultado){
    document.write("Clase llena, no hay espacio para nuevos alumnos")
} else {
    document.write("Clase no encontrada")
}