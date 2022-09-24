let submit = document.getElementById("verify"); 
let valor1 = document.getElementById("valorA").value;
submit.addEventListener("click", teste(valor1));

function teste(val) {
   alert(val)
} 