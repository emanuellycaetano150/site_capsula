//vc = volume do cilindro  ==>  vc = PI * raio²
//ve = (4/3)* PI * raio³ ==>
// vcap = volome da capsula 
// vcap = vc + ve
// vt = volume do tanque 
// vt = L * H * C



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
    let opcao = 'capsula' // tanque ou capsula
    let precoCap = 0.005 // R$ 0.005 uo seja meio centavo
    let precoTnq = 5000 // R$ 5000 ou seja cinco mil reais

    let raio = 2, alturaCil = 4 // capsula 
    let altura = 2, largura = 2, comprimento = 2 // tanque 

    let volTanque = 0, volCapsula = 0, volCil = 0, volEsfera
    let custoTanque = 0, custoCapsula = 0

    if(opcao === 'tanque'){
        volTanque = calcularVolTanqueRet(largura, altura, comprimento)
       custoTanque = verCustoTanque(volTanque, precoTnq)
        console.log(`O volume do tanque é: ${volTanque} m³`)
        console.log(`O custo do tanque de remédio é: ${custoTanque.toFixed(2)} m³`)
    }else if(opcao === 'capsula'){
        volCil = calcularVolCil(raio, alturaCil)
        volEsfera = calcularVolEsfera(raio)
        volCapsula = calcularVolCapsula(volCil, volEsfera)
        custoCapsula = verCustoCapsula(volCapsula, precoCap)
        console.log(`O volume do cilindro é: ${volCil} cm³`)
        console.log(`O volume da esfera é: ${volEsfera} cm³`)
        console.log(`O volume da capsula é: ${volCapsula} cm³`)
        console.log(`O custo da capsula de remédio é: R$ ${custoCapsula.toFixed(2)} cm³`)
    }else{
        console.log(`Tipo inválido! Digite novamente.`)
    }

}
principal()