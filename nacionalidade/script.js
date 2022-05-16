function verificaNacionalidade(){
  let pais = document.querySelector('#pais').value.toUpperCase()
  let resultado = document.querySelector('#resultado')
  resultado.innerHTML = `Você é do país ${pais}`
  if(pais === "BRASIL"){
    resultado.innerHTML = 'Você é brasileiro!'
    
  }else{
    resultado.innerHTML = `Você é estrangeiro!`
  }
}