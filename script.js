document
  .getElementById("btnInteractuar")
  .addEventListener("click", function () {
    const floresContainer = document.querySelector(".flores");

    // Crear una flor
    const flor = document.createElement("div");
    flor.classList.add("flor");

    // Colocar la flor en una posición aleatoria
    flor.style.left = Math.random() * 90 + "%"; // 90% para que quede dentro del contenedor
    flor.style.top = Math.random() * 100 + "%";

    // Añadir la flor al contenedor
    floresContainer.appendChild(flor);

    // Eliminar la flor después de 5 segundos
    setTimeout(() => {
      floresContainer.removeChild(flor);
    }, 5000);
  });
