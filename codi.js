var elementsNav = document.querySelectorAll("nav a");

elementsNav.forEach(function(element) {
    element.addEventListener("mouseover", function() {
        this.style.color = "blue";
    });

    element.addEventListener("mouseout", function() {
        this.style.color = "white";
    });
});



var logo = document.getElementById("home");
logo.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
    });
});






window.onload = function () {
    var galeria = document.querySelector(".galeria");
    var imatges = galeria.querySelectorAll("img");
    var numImatges = imatges.length;
    let index = 0;



    imatges.forEach((imatges, i) => {
        imatges.addEventListener("click", function () {
            mostraEnGran(i);
        });
    });

    function mostraEnGran(index) {
        var conenidorGran = document.createElement("div");
        conenidorGran.classList.add("imatgeGran");

        var imatgeGran = document.createElement("img");
        imatgeGran.src = imatges[index].src;
        imatgeGran.alt = imatges[index].alt;

        conenidorGran.appendChild(imatgeGran);
        var imgCreu = document.createElement("img");
        imgCreu.src = "recursos/imatges/creu.png";
        imgCreu.style.position = "absolute";
        imgCreu.style.top = "100px";
        imgCreu.style.right = "280px";
        imgCreu.style.height = "50px"
        imgCreu.style.background = "none";
        imgCreu.style.border = "none";
        imgCreu.style.color = "#fff";
        imgCreu.style.fontSize = "16px";
        imgCreu.style.cursor = "pointer";
        imgCreu.addEventListener("click", function () {
            conenidorGran.remove();
        });

        conenidorGran.appendChild(imgCreu);
        document.body.appendChild(conenidorGran);
    }

    mostraImatge(index);

    function mostraImatge(index) {
        imatges.forEach((img, i) => {
            if (i == index) {
                img.style.display = "block"; //mostra
              } else { 
                img.style.display = "none"; //amaga
            }
        });
    }


    function mostraSeguentImatge() {
        index = (index + 1) % numImatges;
        mostraImatge(index);
    }

    function mostraImatgeAnterior() {
        index = (index - 1 + numImatges) % numImatges;
        mostraImatge(index);
    }

    var fletxaEsquerra = document.createElement("img");
    fletxaEsquerra.src = "recursos/imatges/fletxa esquerra.png"
    fletxaEsquerra.alt = "FLETXA ESQUERRA"
    fletxaEsquerra.style.width = "30px"
    fletxaEsquerra.style.height = "30px"
    fletxaEsquerra.classList.add("fletxa");
    fletxaEsquerra.addEventListener("click", mostraImatgeAnterior);

    var fletxaDreta = document.createElement("img");
    fletxaDreta.src = "recursos/imatges/fletxa dreta.png"
    fletxaDreta.alt = "FLETXA DRETA"
    fletxaDreta.style.width = "30px"
    fletxaDreta.style.height = "30px"
    fletxaDreta.classList.add("fletxa");
    fletxaDreta.addEventListener("click", mostraSeguentImatge);

    galeria.appendChild(fletxaEsquerra);
    galeria.appendChild(fletxaDreta);

    
};

