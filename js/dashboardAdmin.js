const body = document.querySelector("body"),
    sidebar = body.querySelector("nav"),
    toggle = body.querySelector(".toggle"), 
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");

// Verifica si el botón de menú existe antes de asignar el evento
if (toggle) {
    toggle.addEventListener("click", () => {
        sidebar.classList.toggle("close");
    });
}

// Verifica si el botón de búsqueda existe antes de asignar el evento
if (searchBtn) {
    searchBtn.addEventListener("click", () => {
        sidebar.classList.remove("close");
    });
}

// Verifica si el switch de modo oscuro existe antes de asignar el evento
if (modeSwitch) {
    modeSwitch.addEventListener("click", () => {
        body.classList.toggle("dark");
        modeText.innerText = body.classList.contains("dark") ? "Light mode" : "Dark mode";
    });
}

const out = () => {
    Swal.fire({
        title: "CORRECTO",
        text: "¡Has cerrado sesión de manera correcta! Gracias por usar nuestros servicios",
        icon: "success",
        customClass: {
            confirmButton: "botonaceptar"
        }
    }).then(() =>{
        window.location.href = "../index.html"

      })


}