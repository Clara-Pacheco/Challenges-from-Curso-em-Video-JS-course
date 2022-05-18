function contar() {
  
  let inicio = document.getElementById('inicio').value
  let fim = document.getElementById('fim').value
  let passo = document.getElementById('passo').value
  let resultado = document.querySelector('#resultado')
 
  //No início, deixamos os valores como string para podermos fazer as validações usando o length- somente no momento da repetição, transformamos para números. Toda caixa de input retorna uma string, assim como o prompt.
  if (inicio.length == 0 || fim.length == 0 || passo.length == 0){
    resultado.innerHTML='[FALTAM DADOS]!Preencha o(s) campos em branco para iniciar a contagem!'
    
  }else {
    resultado.innerHTML = 'Contando: <br>'
    inicio = Number(inicio)
    fim = Number(fim)
    passo = Number(passo)
    if(passo <= 0){
      resultado.innerHTML='Passo inválido! Contagem feita considerando o PASSO 1:<br> '
      passo=1
    }
    if(inicio > fim){
      for (let c = inicio; c >= fim; c -= passo){
        resultado.innerHTML += `${c} 	\u{1F449}` 
      }

    }else if(inicio < fim ){
      for(let c = inicio; c <= fim; c += passo){
        resultado.innerHTML += `${c} \u{1F449}`
      }
      
    }
    resultado.innerHTML += `\u{1F3C1}`
  }
    
  
}

