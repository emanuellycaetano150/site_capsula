let resposta = document.getElementById(`resposta`)
const PI = 3.14

function calcularVolCil(raioCil, alturaCil){
 return PI * (raioCil * raioCil) * alturaCil
}

function calcularVolEsfera(raioEsfera){
    return 4 * (1/3) * PI * (raioEsfera * raioEsfera * raioEsfera) 
}

function calcularVolTotal(volCil, volEsfera){
    return volCil + volEsfera
}

function calcularVolTanqueRet(largura, comprimento, altura){
    return largura * comprimento * altura 
}

function calcularCustoCapsula(precoCapsula){
    return 50.000 * precoCapsula
}

function custoTotal(tanqueRet){
  return  5000 * tanqueRet
}
function principal(){
    let altura =Number(document.getElementById('altura').value)
    let largura =Number(document.getElementById('largura').value)
    let comprimento =Number(document.getElementById('comprimento').value)
    let raioCil =Number(document.getElementById('raioCil').value)
    let raioEsfera =Number(document.getElementById('raioEsfera').value)
    let alturaCil =Number(document.getElementById('alturaCil').value)
    let volCil = calcularVolCil(raioCil, alturaCil)
    let volEsfera = calcularVolEsfera(raioEsfera)
    let capsula = calcularVolTotal(volCil, volEsfera)
    let tanqueRet = calcularVolTanqueRet(largura, comprimento, altura)
    let precoCapsula = 0.005
    let custo = custoTotal(tanqueRet)


    resposta.innerHTML += `O valor da capsula é de: ${custo.toFixed(2)}<br>`
    resposta.innerHTML += `O preco da capsula é de: ${precoCapsula.toFixed(2)} ${capsula}`
    resposta.innerHTML = ``

}
