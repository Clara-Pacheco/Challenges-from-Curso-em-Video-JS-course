let day = new Date()
let dayOfWeek = day.getDay()

switch(dayOfWeek){
  case 0:
    console.log('Domingo')
    break
  case 1:
    console.log('Segunda')
    break
  case 2:
    console.log('Terça')
    break
  case 3:
    console.log('Quarta')
    break
  case 4:
    console.log('Quinta')
    break
  case 5:
    console.log('Sexta')
  case 6:
    console.log('Sábado')
    break
  default:
    console.log('Opção inválida')
}