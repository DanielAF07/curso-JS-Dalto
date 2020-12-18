class Llave {
    constructor(nombre, modelo, precio) {
        this.nombre = nombre
        this.modelo = modelo
        this.precio = precio
    }
    showLlave() {
        return `<img src="key.png" alt="${this.nombre}" width="100px">
        <h2>${this.nombre}</h2>
        <h3>Modelo: <b>${this.modelo}</b></h3> 
        <p>Precio: <b style="color:green">$${this.precio}</b></p>`
    }

}

const selectedKey = (modelo, precio) => {
    let data = document.querySelector("#selected-key")
    data.setAttribute("value", modelo)
    console.log(`El usuario quiere comprar la llave modelo ${modelo} a un precio de ${precio}`)
}

const container = document.querySelector(".flex-container")

let div = document.createDocumentFragment()
let llaves = []
for(let i = 1; i <= 20; i++){
    let randModelo = Math.round(Math.random()*1000+1000)
    let randPrecio = Math.round(Math.random()*100 + 20)
    let currentLlave = new Llave(`Llave ${i}`, randModelo, randPrecio)
    let innerDiv = document.createElement("DIV")
    innerDiv.addEventListener("click", ()=>{selectedKey(randModelo, randPrecio)})
    innerDiv.innerHTML = currentLlave.showLlave()
    innerDiv.classList.add("flex-item")
    innerDiv.tabIndex = i
    div.appendChild(innerDiv)
    llaves.push(currentLlave)
}

container.appendChild(div)