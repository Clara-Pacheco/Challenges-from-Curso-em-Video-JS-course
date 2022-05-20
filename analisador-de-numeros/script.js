let num = document.querySelector('#num')
let areaSelecao = document.querySelector('#selarea')
let res = document.querySelector('#res')
let valores = []

function isNumero(n){
  if(Number(n) > 0 && Number(n) <=100){
    return true
  }else {
    return false
  }
}

function inLista(n,l){
  if(l.indexOf(Number(n)) != -1){
    return true
  }else {
    return false
  }
}


function adicionar() {
  if(isNumero(num.value) && !inLista(num.value, valores )){
    valores.push(Number(num.value))
    console.log(valores)
    let item = document.createElement('option')
    item.innerHTML = `Valor ${num.value} adicionado`
    areaSelecao.appendChild(item)
    res.innerHTML = ' '
  }else{
    alert('Valor inválido ou já encontrado na lista')
  }
  num.value = ' '
  num.focus()
}

function finalizar(){
  if(valores.length == 0){
    alert('Adicione valores antes de finalizar')
  }else{
    let totalElements = valores.length
    let maior = valores[0]
    let menor = valores[0]
 
    for(let pos in valores){
      if(valores[pos] > maior){
        maior = valores[pos]
      }
      if(valores[pos] < menor){
        menor = valores[pos]
      }
    }

    let soma = 0
    let media = 0
    for (let pos in valores){
      soma = soma + valores[pos]
      media = soma/valores.length
    }


    res.innerHTML = ' ' //Para zerar o resultado
    res.innerHTML += `<p>Ao todo, temos ${totalElements} elementos cadastrados</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}</p>` 
    res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
    res.innerHTML += `<p>A média entre todos os valores informados é de ${media}</p>`

  }
}