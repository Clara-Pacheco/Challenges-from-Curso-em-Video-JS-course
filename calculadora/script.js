function somar(){
  let n1 = document.querySelector('#n1').value
  let n2 = document.querySelector('#n2').value
  n1 = Number(n1)
  n2 = Number(n2)
  let resultado = document.querySelector('#resultado')
  resultado.innerHTML = `O resultado da soma entre ${n1} e ${n2} é ${n1+n2}`
}