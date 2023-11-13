var contain = document.querySelector(".container");
var input_area = document.querySelectorAll("input");
var notif = document.querySelector(".notif");
var button_plus = document.querySelectorAll(".plus");
var button_moins = document.querySelectorAll(".moins");
var i = 0;
var like = document.querySelectorAll(".card-text .likebtn");
var achat = document.querySelector(".achat-top");
var montant = document.querySelector(".achat-bottom .montant-final");
var result = 0;
var reset = document.querySelector('.reset');

//Animation bouton like
like.forEach((li) => {
  li.addEventListener("click", () => {
    if (li.classList.contains("likebtn")) {
      li.classList.remove("likebtn");
      li.classList.add("like1");
    } else {
      li.classList.remove("like1");
      li.classList.add("likebtn");
    }
  });
});

//Animation bouton plus et moins

button_plus.forEach((button, index) => {
  var card = document.querySelectorAll(".container-card")[index];
  var image = card.querySelector("img").src;
  var price = parseInt(card.querySelector(".price").textContent);
  var title = card.querySelector(".title").textContent;
  var input = card.querySelector("input");
  var moins = card.querySelector(".moins");
  button.addEventListener("click", () => {
    result += price;
    if (i < 25 && input.value < 25) {
      i++;
      input.value++;
    }
    not();

    if (input.value == 1) {
      var newdiv = document.createElement("section");
      newdiv.setAttribute("class", `newdiv`);
      newdiv.innerHTML = `<div class="newdiv-image"><img src="${image}" alt=""></div><div class="newdiv-text"><div class="nombre">×${input.value}</div><div class="titre">${title}</div><div class="prix">Montant = <span class="montant-produit">${price}  FCFA</span></div></div>`;
      achat.appendChild(newdiv);
    }
    montant.innerHTML = `MONTANT TTC = ${result} FCFA`;
    reset.addEventListener('click',()=>{
        achat.innerHTML = '<h1>PANIER</h1>';
        result = 0;
        i = 0;
        input_area.forEach((inp)=>{
        inp.value = 0;
        montant.innerHTML = ''
        })
    })
  });
  not();

});
button_moins.forEach((btn, index) => {
  var card = document.querySelectorAll(".container-card")[index];
  var image = card.querySelector("img").src;
  var price = parseInt(card.querySelector(".price").textContent);
  var title = card.querySelector(".title").textContent;
  var input = card.querySelector("input");
  btn.addEventListener("click", () => {
    if (i > 0 && input.value > 0) {
      i--;
      input.value--;
      notif.textContent = i;
      result -= price;
    }
    montant.innerHTML = `MONTANT TTC = ${result} FCFA`;
  });
});

function not() {
  notif.textContent = i;
}
