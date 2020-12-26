// Definindo as orderns.
let order = []; // Ordens do jogo.
let clickedOrder = []; // Ordem de cliques do jogador.
let score = 0; // Para saber quando errou.

/**
  * 0 - Verde;
  * 1 - Vermelho;
  * 2 - Amarelo; e
  * 3 - Azul.
  */

  // Selecionando as cores do HTML.
  const blue = document.querySelector('.blue');
  const red = document.querySelector('.red');
  const green = document.querySelector('green');
  const yellow = document.querySelector('yellow');


// Sorteando números entre 0 e 3.
let shuffleOrder = () => {
     
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    // Acendendo a cor do número sorteado.
    for(let i in order) {
        
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
     
    }

}

// Acendendo a cor.
let lightColor = (element, number) => {
    
    number = number * 500;
    
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);

    setTimeout(() => {
        element.classList.remove('selected');
    });

}