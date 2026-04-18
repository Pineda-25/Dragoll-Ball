document.addEventListener("DOMContentLoaded", function () {
  const selectRaza = document.querySelector("#selectRaza");
  const btnMostrar = document.querySelector("#btnMostrar");
  const cuerpoTabla = document.querySelector("#cuerpoTabla");

  btnMostrar.addEventListener("click", function () {
    const razaSeleccionada = selectRaza.value;

    /* Validar que se haya selecionado */
    if (razaSeleccionada === "") {
      alert("¡Seleccione una raza!");
      return;
    }

    /* Limpiar la tabla */
    cuerpoTabla.innerHTML = "";

    /* Hacemos las consultas */
    fetch(`https://dragonball-api.com/api/characters?race=${razaSeleccionada}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error en la respuesta de la API");
        }
      })
      .then((data) => {
        console.log("Personajes obtenidos:", data);
      })
      .catch((error) => {
        console.error("Error al obtener los personajes:", error);
        alert("Error al obtener los personajes");
      });
  });
});
