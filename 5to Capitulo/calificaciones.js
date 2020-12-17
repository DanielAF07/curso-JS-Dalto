let materias = {
    fisica: {
        asistencia: 90,
        promedio: 7,
        practicas: 3
    },
    matematicas: {
        asistencia: 94,
        promedio: 7,
        practicas: 3
    },
    logica: {
        asistencia: 89,
        promedio: 10,
        practicas: 1
    },
    programacion: {
        asistencia: 97,
        promedio: 9,
        practicas: 3
    },
    algebra: {
        asistencia: 90,
        promedio: 7,
        practicas: 3
    },
    bbdd: {
        asistencia: 89,
        promedio: 7,
        practicas: 3
    }
}

const getCalif = () =>{
    for(materia in materias){
        let asistencia = materias[materia]["asistencia"]
        let promedio = materias[materia]["promedio"]
        let practicas = materias[materia]["practicas"]
        console.log(materia)
        if(asistencia >= 90){
            console.log("%cAsistencia en ORDEN", "color:green;font-weight:bold")
        }
        else{
            console.log("%cReprobado por baja asistencia", "color:red;font-weight:bold")
        }
        if(promedio >= 7){
            console.log("%cPromedio en ORDEN", "color:green;font-weight:bold")
        }
        else{
            console.log("%cReprobado por bajo promedio", "color:red;font-weight:bold")
        }
        if(practicas >= 3){
            console.log("%cPracticas en ORDEN", "color:green;font-weight:bold")
        }
        else{
            console.log("%cReprobado por falta de practicas", "color:red;font-weight:bold")
        }
        console.log('')
    }
}

getCalif()