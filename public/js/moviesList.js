const QS = (element) => document.querySelector(element);
const QSA = (element) => document.querySelectorAll(element);

window.onload = () => {
    let body = QS("body"),
        h1 = QS("h1")

        let darkMode = confirm("¿Desea activar el modo oscuro");
        if (darkMode) {
            body.classList.add("fondoMoviesList");
            body.style.backgroundColor = "#7f7f7f";
        };

        h1.innerText = "LISTADO DE PELÍCULAS";
        h1.style.color = "white";
        h1.style.backgroundColor = "teal";
        h1.style.padding = "20px";
};