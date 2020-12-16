class Celular {
    constructor(nombre, color, peso, resolucionCam, resolucionScreen, ram){
        this.nombre = nombre
        this.color = color
        this.peso = peso
        this.resolucionCam = resolucionCam
        this.resolucionScreen = resolucionScreen
        this.ram = ram
        this.on = false
    }

    encender(){
        this.on = true
        alert(`${this.nombre} encendido`)
    }

    apagar(){
        this.on = false
        alert(`${this.nombre} apagado`)
    }

    reiniciar(){
        if(this.on){
            alert(`${this.nombre} reiniciando`)
            this.apagar()
            this.encender()
        }
        else {
            alert(`${this.nombre} está apagado, no puedo reiniciarlo. Sin embargo, lo estoy encendiendo`)
            this.encender()
        }
    }

    tomarFoto(){
        alert(`CHEEZE!\n${this.nombre} tomó una foto a resolución ${this.resolucionCam}`)
    }

    grabar(){
        alert(`${this.nombre} tomó un video a resolución ${this.resolucionCam}`)
    }

    get getInfo(){
        return `
    <h2>${this.nombre}</h2>
    Color: <b>${this.color}</b><br>
    Peso: <b>${this.peso} g</b><br>
    Resolución de camara: <b>${this.resolucionCam}MP</b><br>
    Resolución de pantalla: <b>${this.resolucionScreen} pixels</b><br>
    Memoria ram: <b>${this.ram}GB</b><br>`
    }
}

class CelularGamaAlta extends Celular {
    constructor(nombre, color, peso, resolucionCam, resolucionScreen, ram, resolucionCamExtra){
        super(nombre, color, peso, resolucionCam, resolucionScreen, ram)
        this.resolucionCamExtra = resolucionCamExtra
    }
    grabarSlowMotion(){
        alert(`${this.nombre} grabando en camara SUPER LENTA WOOOO`)
    }
    recFacial(){
        alert(`${this.nombre} usando reconocimiento facial para desbloquear`)
    }
    tomarFotoCamExtra(){
        alert(`${this.nombre} tomando foto con camara extra resolución ${this.resolucionCamExtra}`)
    }
    get getInfo(){
        return `${super.getInfo}
        Resolución de camara EXTRA: <b>${this.resolucionCamExtra}MP</b><br>`
    }
}

let samsungA20s = new Celular("Samsung Galaxy A20s", "Azul", 183, 13,"720x1560",4)
let lgK31 = new Celular("LG K31", "Gris", 146, 13,"720x1520", 2)
let xiaomiR9A = new Celular("Xiaomi Redmi 9A", "Celeste", 194, 13,"720x1600", 2)

let iphone12 = new CelularGamaAlta("Apple iPhone 12", "Plata", 164, 12, "1170x2532", 4, 12)
let huaweiP40Pro = new CelularGamaAlta("Huawei P40 Pro", "Azul", 209, 50, "1200x2640", 8, 40)

document.write(`${samsungA20s.getInfo} ${lgK31.getInfo} ${xiaomiR9A.getInfo} ${iphone12.getInfo} ${huaweiP40Pro.getInfo}`)
