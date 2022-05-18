function gerarTabuada(){
  let number = document.querySelector('#txtnumber').value
  let tabuada = document.querySelector('#selTabuada')
  //Validação
  if(number.length == 0){
    alert('Por favor, digite um número!')
  }else{
    number = Number(number)
    tabuada.innerHTML=''
    for(let c = 1 ; c <= 10 ; c++){
           //Criando o elemento <option> de forma dinâmica, ou seja, ao invés de criá-lo pelo HTML, ele será criado pelo JS.
          //1- Crio o item 'option' do select
          let item = document.createElement('option')
          // 2- Modifica o valor interno desse option com a multiplicação
          item.text = `${c} x ${number} = ${c * number}`
          item.value = `tab${c}`
          //3- Adiciona esse item e seu conteúdo modificado dentro do select
          tabuada.appendChild(item)
        }
  }
 
 }
 