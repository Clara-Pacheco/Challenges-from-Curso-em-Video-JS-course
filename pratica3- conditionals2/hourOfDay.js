let hourNow = new Date()
let hora= hourNow.getHours()
console.log(`Agopra são exatamente ${hora} horas.`)
if(hora<12){
  console.log('Bom dia!')
}else if(hora > 12 && hora < 18){
  console.log('Boa tarde!')
}else{
  console.log('Boa noite!')
}