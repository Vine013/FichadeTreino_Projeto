formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    let nick = document.getElementById("nick").value;
    let sexo = document.querySelector('input[name="sexo"]:checked').value;

    if (sexo === "masculino") {
        window.location.href = "Páginas/Inicio.html?nick=" + nick;
    } else if (sexo === "feminino") {
        window.location.href = "Páginas/InicioM.html?nick=" + nick;
    }
});

