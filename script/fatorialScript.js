let fatorial = 1; // Movido para fora do escopo da função de clique
const btn = document.querySelector("#enviar");

function fatCalc(n) {
    for (n; n >= 1; n--) {
        fatorial = fatorial * n;
    }
    return fatorial;
}


 btn.addEventListener("click", function (e) {
   e.preventDefault();

   const number = document.querySelector("#numb");

   const n = number.value;

   muda_h2(fatCalc(n));
   fatorial = 1;
});

function muda_h2(fatorial) {
   var h2 = document.getElementById('result');
   h2.innerHTML = fatorial;
}
