const QS = (element) => document.querySelector(element);
const QSA = (element) => document.querySelectorAll(element);

window.onload = () => {
    let h1 = QS("h1"),
        article = QS("article"),
        section = QS("section")

    h1.innerText = "AGREGANDO PELÍCULAS";
    h1.classList.add("titulo");
    article.classList.add("fondoTransparente");
    section.classList.add("fondoCRUD");
};