let listadefotos = [
  { nome: "foto1", img: "imagens/1.png" },
  { nome: "foto2", img: "imagens/2.png" },
  { nome: "foto3", img: "imagens/3.png" },
  { nome: "foto4", img: "imagens/4.png" },
  { nome: "foto5", img: "imagens/5.png" },
  { nome: "foto6", img: "imagens/6.png" },
  { nome: "foto7", img: "imagens/7.png" },
  { nome: "foto8", img: "imagens/8.png" },
  { nome: "foto9", img: "imagens/9.png" },
  { nome: "foto10", img: "imagens/10.png" },
  { nome: "foto11", img: "imagens/11.png" },
  { nome: "foto12", img: "imagens/12.png" },
];

function openphoto(index) {
  document.querySelector(".modal").style.display = "flex";
  document.querySelector(".photomodal").src = index;
}

function closemodal() {
  document.querySelector(".modal").style.display = "none";
  document.querySelector(".photomodal").src = "";
}

listadefotos.map((item, index) => {

  let photoitem = document.querySelector(".model").cloneNode(true);

  photoitem.querySelector(".photo").src = item.img;
  photoitem.querySelector(".photo").setAttribute("onclick", `openphoto("${item.img}")`);

  document.querySelector(".gallery-area").append(photoitem);

});

window.document.onkeydown = chooseKey;

function chooseKey(clique) {
  if (clique.keyCode == 27) {
    closemodal();
  }
};