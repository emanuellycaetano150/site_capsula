//vc = volume do cilindro  ==>  vc = PI * raio²
//ve = (4/3)* PI * raio³ ==>
// vcap = volome da capsula 
// vcap = vc + ve
// vt = volume do tanque 
// vt = L * H * C

let resposta = document.getElementById('resposta')

function verCustoCapsula(volCapsula, precoCap){
    return volCapsula * precoCap
}




function calcularVolTanqueRet(largura, altura, comprimento){
    return largura * altura * comprimento 
}


function calcularVolEsfera(raio){
    const PI = 3.14 
    return (4/3) * PI * raio * raio * raio 
}

function calcularVolCapsula(volCil, volEsfera){
    return volCil + volEsfera
}


function calcularVolCil(raio, alturaCil){
    const PI = 3.14 
    return PI * raio * raio * alturaCil 
}

function verCustoTanque(volTanque, precoTnq){
    return volTanque * precoTnq
}


function principal(){
    let precoCap = 0.005 // R$ 0.005 uo seja meio centavo
    let precoTnq = 5000 // R$ 5000 ou seja cinco mil reais
    
    let opcao = document.getElementById('opcao').value // tanque ou capsula

    let  alturaCil = Number(document.getElementById('alturaCil').value) // capsula 
    let raio = Number(document.getElementById('raio').value) // tanque 

   let comprimento = Number(document.getElementById('comprimento').value)
   let altura = Number(document.getElementById('altura').value)
   let largura = Number(document.getElementById('largura').value)

    resposta.innerHTML=``

   let custoTanque = 0, custoCapsula = 0
   let volTanque = 0, volCapsula = 0, volCil = 0, volEsfera = 0

    if(opcao === 'tanque'){
        volTanque = calcularVolTanqueRet(largura, altura, comprimento)
       custoTanque = verCustoTanque(volTanque, precoTnq)
        console.log(`O volume do tanque é: ${volTanque} m³`)
        console.log(`O custo do tanque de remédio é: ${custoTanque.toFixed(2)} m³`)

        resposta.innerHTML += `O volume do tanque é: ${volTanque} m³ <br>`
        resposta.innerHTML += `O custo do tanque de remédio é: ${custoTanque.toFixed(2)} m³ <br>`
    }else if(opcao === 'capsula'){
        volCil = calcularVolCil(raio, alturaCil)
        volEsfera = calcularVolEsfera(raio)
        volCapsula = calcularVolCapsula(volCil, volEsfera)
        custoCapsula = verCustoCapsula(volCapsula, precoCap)
        console.log(`O volume do cilindro é: ${volCil.toFixed(2)} cm³`)
        console.log(`O volume da esfera é: ${volEsfera.toFixed(2)} cm³`)
        console.log(`O volume da capsula é: ${volCapsula.toFixed(2)} cm³`)
        console.log(`O custo da capsula de remédio é: R$ ${custoCapsula.toFixed(2)} cm³`)

        resposta.innerHTML += `O volume do cilindro é: ${volCil.toFixed(2)} cm³ <br>`
        resposta.innerHTML += `O volume da esfera é: ${volEsfera.toFixed(2)} cm³ <br>`
        resposta.innerHTML += `O volume da capsula é: ${volCapsula.toFixed(2)} cm³ <br>`
        resposta.innerHTML += `O custo da capsula de remédio é: R$ ${custoCapsula.toFixed(2)} <br>`
    }else{
        console.log(`Tipo inválido! Digite novamente.`)
        resposta.innerHTML += `Tipo inválido! Digite novamente.`
    }

}
