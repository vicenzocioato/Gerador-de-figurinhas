const textocima = document.getElementById("textocima")
const textomeio = document.getElementById("textomeio")
const textobaixo = document.getElementById("textobaixo")

const faixazul = document.getElementById("faixazul")
const faixabranca = document.getElementById("faixabranca")
const faixapreta = document.getElementById("faixapreta")

textocima.addEventListener("input", () => {
    faixazul.innerText = textocima.value.toUpperCase()
});
textomeio.addEventListener("input", () => {
    faixabranca.innerText = textomeio.value.toUpperCase()
});
textobaixo.addEventListener("input", () => {
    faixapreta.innerText = textobaixo.value.toUpperCase()
});

const botao = document.getElementById('download')
const div = document.getElementById('bandeira')

botao.addEventListener("click", () => {
  html2canvas(div).then(canvas => {
    const link = document.createElement("a");
    link.download = "imagem.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
});

const number = document.getElementById("number")
const bandeira = document.getElementById("bandeira")

number.addEventListener('input', () =>{
  bandeira.style.fontSize = number.value+"pt"
})