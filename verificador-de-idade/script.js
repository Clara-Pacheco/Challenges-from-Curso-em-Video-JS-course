function verificar(){
  let anoNascimento = document.querySelector('#caixa-ano').value
  let masculino = document.querySelector('#masc')
  let feminino = document.querySelector('#fem')
  let form = document.querySelector('#form')
  let resultado = document.querySelector('#resultado')
  
  let data = new Date()
  let dataAtual = data.getFullYear()
  let idade = dataAtual - Number(anoNascimento)

    //Validação
  if(anoNascimento.length == 0 || Number(anoNascimento) > dataAtual ){
    alert('[ERRO]! Verifique os dados e tente novamente')
  }else{
    resultado.innerHTML = `Idade calculada ${idade}`
    
  }
  let img = document.createElement('img')
  img.setAttribute('id','foto')
  img.style.borderRadius='50%'
  img.style.display='flex'
  img.style.marginTop='30px'
  img.style.marginLeft='25px'

  
  let genero = ''
  if(masculino.checked){
    genero = 'homem'
    if(idade >= 0 && idade < 10){
      img.setAttribute('src', 'assets/menino.jpg')
      form.style.backgroundColor = '#9FBCBF'
    }else if(idade >=10 && idade < 21){
      img.setAttribute('src', 'assets/homem-jovem.jpg')
      form.style.backgroundColor='#C5C1B4'
    }else if(idade >= 21 && idade <= 60){
      img.setAttribute('src', 'assets/homem-adulto.jpg')
      form.style.backgroundColor='#676565'
    }else{
      img.setAttribute('src', 'assets/homem-idoso.jpg')
      form.style.backgroundColor='#972F32'
    }
  }else if(feminino.checked){
    genero = 'mulher'
    if(idade >=0 && idade <10){
      img.setAttribute('src', 'assets/menina.jpg')
      form.style.backgroundColor = '#EEE276'
    }else if(idade >= 10 && idade < 21){
      img.setAttribute('src', 'assets/mulher-jovem.jpg')
      form.style.backgroundColor = '#FFB2B2'
    }else if(idade >= 21 && idade < 60){
      img.setAttribute('src', 'assets/mulher-adulta.jpg')
      form.style.backgroundColor = '#F9C4AF'
    }else{
      img.setAttribute('src', 'assets/mulher-idosa.jpg')
      form.style.backgroundColor = '#9E8E54'
    }
    }
    resultado.innerHTML=`Detectamos ${genero} com ${idade} anos.`
    resultado.appendChild(img)
}

/*Para colocarmos as fotos, podemos colocar no HTML e irmos mudando no JS, ou criar dinamicamente,
ou seja, direto do JS */