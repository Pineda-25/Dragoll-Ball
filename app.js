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
        cuerpoTabla.innerHTML = "";
        if (data.length === 0) {
          cuerpoTabla.innerHTML =
            "<tr><td colspan='6'>No se encontraron personajes para esta raza.</td></tr>";
          return;
        }

        data.forEach((personaje, index) => {
          const fila = document.createElement("tr");
          fila.innerHTML = `
                <td>${index + 1}</td>
                <td>${personaje.name}</td>
                <td>${personaje.ki}</td>
                <td>${personaje.gender}</td>
                <td>
                    <button class="btn-img" data-id="${personaje.id}">Ver Imagen</button>
                </td>
                <td>
                    <button class="btn-detalle" data-id="${personaje.id}">Ver Detalle</button>
                </td>
            `;
          cuerpoTabla.appendChild(fila);
        });
      })
      .catch((error) => {
        console.error("Error al obtener los personajes:", error);
        alert("Error al obtener los personajes");
      });
  });
});
