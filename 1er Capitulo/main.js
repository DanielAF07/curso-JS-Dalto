

const helados = (n) =>{
    let monto = prompt(`Cual es el monto de ${n}?`)
    let helados = [{
        Nombre: "Palito de helado de agua",
        Precio: 0.6
    },
    {
        Nombre: "Palito de helado de crema",
        Precio: 1
    },
    {
        Nombre: "Bombón helado marca heladix",
        Precio: 1.6
    },
    {
        Nombre: "Bombón helado marca heladovich",
        Precio: 1.7
    },
    {
        Nombre: "Bombón helado marca helardo",
        Precio: 1.8
    },
    {
        Nombre: "Potecito de helado con confites o Pote de 1/4kg",
        Precio: 2.9
    }
    ]
    for (let i = 0; i < helados.length; i++){
        if(i==0 && monto < helados[i]["Precio"]){
            return(`No te alcanzas nada ${n}.`)
        }
        else if(!helados[i+1] || (monto >= helados[i]["Precio"] && monto < helados[i+1]["Precio"])){
            return(`${n} comprate ${helados[i]["Nombre"]}. Tu vuelto es de ${parseFloat(monto-helados[i]["Precio"]).toFixed(2)} USD`)
        }
    }
}

function loteria(){
    let precioBoleto = 200
    let boletosComprados = 0
    while(monto >= precioBoleto && boletosComprados<3){
        boletosComprados++
        monto -= precioBoleto
    }
    document.write(`Compraste ${boletosComprados} boleto(s)<br>Tu vuelto es de ${monto}`)
    if(boletosComprados==3){
        document.write(`<br>Sin embargo, regalaste el vuelto asi que tu vuelto es de 0`)
    }
}

function detectorDeMentiras(){

}

console.log(helados("Cofla")+'<br>')
console.log(helados("Pedro")+'<br>')
console.log(helados("Roberto")+'<br>')