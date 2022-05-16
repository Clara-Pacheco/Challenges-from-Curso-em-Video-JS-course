function clicar(){
  const area = document.querySelector('#area')
  area.innerText = "Clicou!"
  area.style.backgroundColor = 'red'
}

function entrar(){
  const area = document.querySelector('#area')
  area.innerText = "Entrou!"
}

function sair(){
  const area = document.querySelector('#area')
  area.innerText = "Saiu!"
  area.style.backgroundColor = 'green'
}