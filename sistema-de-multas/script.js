function verificaVelocidade(){
  let velocidade = Number(document.querySelector('#vel').value)
  let situacao = document.querySelector('#situacao')
  if (velocidade>60){
    situacao.innerHTML = `Sua velocidade é de <strong>${velocidade}km/h</strong> e está acima do permitido por lei. <strong>MULTADO!</strong>`
  }else{
    situacao.innerHTML = `Sua velocidade de <strong>${velocidade}km/h</strong> e está dentro do permitido por lei`
  }
  //Primeiro cria o elemento HTML pelo Javascript e define o seu conteúdo interno
  const div = document.createElement('div')
  div.innerText = 'Dirija sempre com segurança'
  div.style.color='blue'

  //Depois, seleciona o elemento 'body' e através do método append(), define que se quer colocar essa div criada no final do desse elemento 'body'
  const body = document.querySelector('body')
  body.append(div)
}

