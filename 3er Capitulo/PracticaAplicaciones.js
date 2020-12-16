class Juego {
    constructor(nombre, descargas, puntuacion, peso){
        this.nombre = nombre
        this.descargas = descargas
        this.puntuacion = puntuacion
        this.peso = peso
        this.instalada = false
        this.abierta = false
    }
    get getInfo(){
        return `
        <h4><b>${this.nombre}</b></h4>
        Cantidad de Descargas: <b>${this.descargas}</b><br>
        Puntuación: <b>${this.puntuacion}</b><br>
        Peso: <b>${this.peso}</b><br>
        `
    }
    instalar(){
        if(!this.instalada){
            alert(`Instalando ${this.nombre}`)
            this.instalada = true
            alert(`${this.nombre} instalado en el dispositivo`)
        }
        else {
            alert(`${this.nombre} ya se encuentra instalado`)
        }
    }
    desinstalar(){
        if(this.abierta){
            this.cerrar()
        }
        if(this.instalada){
            alert(`Desinstalando ${this.nombre}`)
            this.instalada = false
            alert(`${this.nombre} desinstalado del dispositivo`)
        }
        else {
            alert(`${this.nombre} no está instalado en el dispositivo`)
        }
    }
    abrir(){
        if(this.instalada && !this.abierta){
            alert(`Abriendo ${this.nombre}`)
            this.abierta = true
        }
        else if (this.installada && this.abierta) {
            alert(`La aplicación ${this.nombre} ya está abierta`)
        }
        else {
            alert(`Aplicación no encontrada`)
        }
    }
    cerrar(){
        if(this.instalada && this.abierta){
            alert(`Cerrando ${this.nombre}`)
            this.abierta = false
        }
        else if (this.installada && !this.abierta) {
            alert(`La aplicación ${this.nombre} ya está cerrada`)
        }
        else {
            alert(`Aplicación no encontrada`)
        }
    }
}

let clashRoyale = new Juego("Clash Royale", 100000000, 4.2, "126MB")
let dos48 = new Juego("2048", 1000000, 4.5, "80MB")
let hCRacing = new Juego("Hill Climb Racing", 500000000, 4.3, "58MB")
let candyCrush = new Juego("Candy Crush Saga", 1000000000, 4.6, "60MB")
let subwaySurfers = new Juego("Subway Surfers", 1000000000, 4.4, "143MB")
let pokemonCards = new Juego("JCC Pokémon Online", 5000000, 4.2, "49MB")
let clashOfClans = new Juego("Clash of Clans", 500000000, 4.5, "150MB")

document.write("<h2>JUEGOS</h2>")
document.write(`${clashRoyale.getInfo} ${dos48.getInfo} ${hCRacing.getInfo} ${candyCrush.getInfo} ${subwaySurfers.getInfo} ${pokemonCards.getInfo} ${clashOfClans.getInfo}`)