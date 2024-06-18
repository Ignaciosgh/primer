document.addEventListener("DOMContentLoaded", () => {
    const siButton = document.getElementById("si");
    const noButton = document.getElementById("no");
    const mensaje = document.getElementById("mensaje");

    siButton.addEventListener("click", () => {
        mensaje.textContent = "¡Enhorabuena! Te recojo a las 6.";
    });

    noButton.addEventListener("click", () => {
        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const maxLeft = windowWidth - buttonWidth;
        const maxTop = windowHeight - buttonHeight;

        noButton.style.left = Math.random() * maxLeft + "px";
        noButton.style.top = Math.random() * maxTop + "px";
    });
});