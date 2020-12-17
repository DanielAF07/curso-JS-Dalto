class Labor {
    constructor(nombre, duracion){
        this.nombre = nombre
        this.duracion = duracion
    }
    hacerLabor(){
        return(`${this.duracion} min para ${this.nombre}`)
    }
}

let dias = 14 // 2 semanas

let trabajo = new Labor("trabajo", 240)
let trabajosPracticos = new Labor("trabajos practicos", 100)
let homework = new Labor("tareas", 30)
let descanso = new Labor("descanso", 10)
let estudio = new Labor("estudio", 100)

for(let i = 0; i < dias; i++){
    if(!i){
        console.groupCollapsed("SEMANA 1")
    }
    console.groupCollapsed(`DIA ${i+1}`)
    console.log(trabajo.hacerLabor())
    console.log(descanso.hacerLabor())
    console.log(estudio.hacerLabor())
    console.log(trabajosPracticos.hacerLabor())
    console.log(homework.hacerLabor())
    console.groupEnd()
    if (i==(dias/2)-1){
        console.groupEnd()
        console.groupCollapsed("SEMANA 2")
    }
    if(i == dias-1){
        console.groupEnd()
    }
}


