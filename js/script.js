//Ativar menu

const links = document.querySelectorAll(".nav-links a");

function ativarlink(link) {
   const url = location.href;
   const href = link.href;
   if (url.includes(href)) {
      link.classList.add('visitado')  
   }
} 

links.forEach(ativarlink);


//Ativar item do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
   const elemento = document.getElementById(parametro);
   if(elemento){
      elemento.checked = true;
   }
   
}

parametros.forEach(ativarProduto);


// Perguntas Frenquentes

const pergunta = document.querySelectorAll(".perguntas-seg-container button");

function ativarPergunta(event) {
   const pergunta = event.currentTarget;
   const control = pergunta.getAttribute('aria-controls');
   const resposta = document.getElementById(control);
   resposta.classList.toggle('ativa');
   const ativa = resposta.classList.contains("ativa");
   pergunta.setAttribute("aria-expanded", ativa);
}

pergunta.forEach(function(pergunta) {
   pergunta.addEventListener('click', ativarPergunta );
});


//Galeria de fotos --------------

//const galeria = document.querySelectorAll(".escolhasu-image-container img");
//const galeriaContainer = document.querySelector(".escolhasu-image-container");

//function trocarImagem(event) {
//  const img = event.currentTarget;
//   galeriaContainer.prepend(img)
//}

//function eventosGaleria(img) {
//   img.addEventListener('click', trocarImagem);
//}

//galeria.forEach(eventosGaleria);

//--------------------------------

//Animação

if (window.SimpleAnime) {
   new SimpleAnime();
}