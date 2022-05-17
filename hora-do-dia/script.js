function carregar(){
let msg = document.querySelector('#msg')
let img = document.querySelector('#img')

let dataAtual = new Date()
let hora = dataAtual.getHours()
let minuto = dataAtual.getMinutes()

msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos`

if(hora >=0 && hora < 12){
  //Bom dia
  img.src= 'assets/foto-manha.jpg'  
  document.body.style.backgroundColor= '#e2cd9f'
}else if(hora >= 12 && hora <= 18){
  //Boa tarde
  img.src='assets/foto-tarde.jpg'
  document.body.style.backgroundColor = '#BF7C74'
}else{
  //Boa noite
  img.src='assets/foto-noite.jpg'
  document.body.style.backgroundColor = '#00113F'
}

}