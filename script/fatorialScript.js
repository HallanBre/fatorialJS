let fatorial = 1; // Movido para fora do escopo da função de clique
const btn = document.querySelector("#enviar"); // cria uma constante para o botao// para colocar eventos nele




 btn.addEventListener("click", function (e) {
   e.preventDefault(); // Serve para o botao ser inclicavel 

   const number = document.querySelector("#numb"); // pega o numero que foi inserido no input do HTML

   const n = number.value; // pega o valor que foi pego no HTML e tranforma para essa "variavel"

   muda_h2(fatCalc(n)); //chamei a funcao muda_h2 passando como parametro a funcao fatCalc/ para primeiro calcular o fatorial e depois colocar no parametro H2 da tela
   fatorial = 1; //Zerar o fatorial para fazer outro calculo depois 
});

function muda_h2(fatorial) { // funcao para escrever o resultado no H2 do html
   var h2 = document.getElementById('result'); //pega o id do h2 la do frontEnd// o id do DOM 
   h2.innerHTML = fatorial; //Manda o resultado que veio direto do retorno da funcao fatCalc
}


function fatCalc(n) { // funcao para calcular o fatorial
   if(n == 0 || n ==1){
      fatorial = 1;
   }else{
   for (n; n >= 1; n--) { 
       fatorial = fatorial * n;
    }
  }
   return fatorial;
}