let contador = document.getElementById('contador');
contador.innerText = localStorage.getItem('contador') || "0";
function aumentar() {
    contador.innerText = parseInt(contador.innerText) + 1;
    salvarContador();


}
function zetar() {
    contador.innerText = 0;
}

function salvarContador() {
  localStorage.setItem("contador", contador.innerText);
}