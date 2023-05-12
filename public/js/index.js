const QS = (element) => document.querySelector(element);
const QSA = (element) => document.querySelectorAll(element);

window.onload = () => {
    let body = QS("body"),
        main = QS("main"),
        h2 = QS("h2"),
        a = QS("a"),
        p = QSA("p")

    // let userName = prompt("Ingrese un nombre");

    // userName === "" ?
    // h2.innerText = "Invitado" :
    // h2.innerText = `${userName}` ;

    h2.style.textTransform = "upperCase";

    let anchoreColor = "​#E51B3E"
    a.style.color = anchoreColor;

    // let fondo = confirm("¿Desea agregar un fondo?");

    // fondo ?
    // body.classList.add("fondo") :
    // alert("okey");

    p.forEach((paragraph, index) => {
        index % 2 == 0 ?
        paragraph.classList.add("destacadoImpar"):
        paragraph.classList.add("destacadoPar");
    });

    main.style.display = "block";
};