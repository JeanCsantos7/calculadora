
let input = ''

function VisorResultado(Resultado)
{

const visor = document.querySelector('p')
visor.textContent = Resultado

}

function inserirValor(valorEntrada)
{
  input += valorEntrada
  VisorResultado(input)

}

function limparValor()
{

    input = ''
    VisorResultado(input)

}

function resultado()
{
  try{
    const calculo = eval(input)
    VisorResultado(calculo)

  }

  catch(erro)
  {
   
    erro = 'erro'
    VisorResultado(erro)

  }



}

function deletar()
{
    const delet = document.querySelector('.delet')
    delet.addEventListener('click', () => {
      // Verifica se a entrada tem pelo menos um caractere antes de remover
      if (input.length > 0) {
        input = input.slice(0, -1 ); // Remove o último caractere
        VisorResultado(input);
      }
    });
}

// Chama a função deletar() para habilitar a exclusão ao clicar no botão '<'
deletar();