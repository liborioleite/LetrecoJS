let palavraDoDia = "carro";
let valor1 = document.getElementById("valorA").value;
let valor2 = document.getElementById("valorB").value;
let valor3 = document.getElementById("valorC").value;
let valor4 = document.getElementById("valorD").value;
let valor5 = document.getElementById("valorE").value;

if (valor1 === palavraDoDia[0]) {
   document.getElementById("valorA").style.backgroundColor = "#008000"; // inputs na cor verde 
}
if (valor2 === palavraDoDia[1]) {
   document.getElementById("valorB").style.backgroundColor = "#008000"; // inputs na cor verde
}
if (valor3 === palavraDoDia[2]) {
   document.getElementById("valorC").style.backgroundColor = "#008000"; // inputs na cor verde
}
if (valor4 === palavraDoDia[3]) {
   document.getElementById("valorD").style.backgroundColor = "#008000"; // inputs na cor verde
}
if (valor5 === palavraDoDia[4]) {
   document.getElementById("valorE").style.backgroundColor = "#008000"; // inputs na cor verde
}

for (let i; i < palavraDoDia.length; i++) {
   if (valor1 === palavraDoDia[i]) {
      if (i !== 0) {
         document.getElementById("valorA").style.backgroundColor = "#FFFF00" // inputs na cor amarela
      }
   }
}

for (let i; i < palavraDoDia.length; i++) {
   if (valor2 === palavraDoDia[i]) {
      if (i !== 1) {
         document.getElementById("valorB").style.backgroundColor = "#FFFF00" // inputs na cor amarela
      }
   }
}

for (let i; i < palavraDoDia.length; i++) {
   if (valor3 === palavraDoDia[i]) {
      if (i !== 2) {
         document.getElementById("valorC").style.backgroundColor = "#FFFF00" // inputs na cor amarela
      }
   }
}

for (let i; i < palavraDoDia.length; i++) {
   if (valor4 === palavraDoDia[i]) {
      if (i !== 3) {
         document.getElementById("valorD").style.backgroundColor = "#FFFF00" // inputs na cor amarela
      }
   }
}

for (let i; i < palavraDoDia.length; i++) {
   if (valor5 === palavraDoDia[i]) {
      if (i !== 4) {
         document.getElementById("valorE").style.backgroundColor = "#FFFF00" // inputs na cor amarela
      }
   }
}

// E AGORA QUAL O PRÓXIMO PASSO COM RELAÇÃO AOS INPUTS QUE DEVERÃO FICAR VERMELHOS?







let submit = document.getElementById("submeter"); 