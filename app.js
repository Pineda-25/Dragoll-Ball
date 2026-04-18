const URL = "https://dragonball-api.com/api"

// Elementos del DOM
const selectRaza = document.querySelector("#selectRaza")
const btnMostrar = document.querySelector("#btnMostrar")
const cuerpoTabla = document.querySelector("#cuerpoTabla")
const imgPersonaje = document.querySelector("#imgPersonaje")
const bloqueDetalle = document.querySelector("#bloqueDetalle")
const infoPersonaje = document.querySelector("#info")
const txtNombre = document.querySelector("#txtNombre")
const txtKi = document.querySelector("#txtKi")
const txtGenero = document.querySelector("#txtGenero")
const txtDescripcion = document.querySelector("#txtDescripcion")
const controlesTransformacion = document.querySelector("#transformacion")
const selectTransformacion = document.querySelector("#trans")
const btnVerTransformacion = document.querySelector("#btnVerTrasformacion")

let personajeActual = null

document.addEventListener("DOMContentLoaded", function() {
  // Evento para mostrar personajes por raza
  btnMostrar.addEventListener("click", function() {
    const razaSeleccionada = selectRaza.value

    if (razaSeleccionada === "") {
      alert("¡Seleccione una raza!")
      return
    }

    cuerpoTabla.innerHTML = ""

    fetch(`${URL}/characters?race=${razaSeleccionada}`)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("Error en la respuesta de la API")
        }
      })
      .then((data) => {
        cuerpoTabla.innerHTML = ""
        if (data.length === 0) {
          cuerpoTabla.innerHTML = "<tr><td colspan='6'>No se encontraron personajes para esta raza.</td></tr>"
          return
        }

        data.forEach((personaje, index) => {
          const fila = document.createElement("tr")
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
          `
          cuerpoTabla.appendChild(fila)
        })

        const botonesImg = document.querySelectorAll(".btn-img")
        const botonesDetalle = document.querySelectorAll(".btn-detalle")

        botonesImg.forEach((boton) => {
          boton.addEventListener("click", function(evento) {
            const idPersonaje = evento.target.dataset.id
            buscarPersonaje(idPersonaje, "solo_imagen")
          })
        })

        botonesDetalle.forEach((boton) => {
          boton.addEventListener("click", function(evento) {
            const idPersonaje = evento.target.dataset.id
            buscarPersonaje(idPersonaje, "todo_detalle")
          })
        })
      })
      .catch((error) => {
        console.error("Error al obtener los personajes:", error)
        alert("Error al obtener los personajes")
      })
  })

  // Evento para ver transformación seleccionada
  btnVerTransformacion.addEventListener("click", function() {
    const idTransSeleccionada = selectTransformacion.value
    const transformacion = personajeActual.transformations.find(t => t.id == idTransSeleccionada)

    if (transformacion) {
      imgPersonaje.src = transformacion.image
      txtNombre.textContent = transformacion.name
      txtKi.textContent = transformacion.ki
      txtGenero.textContent = personajeActual.gender
      txtDescripcion.textContent = "Transformación de " + personajeActual.name
    }
  })

  // Función para buscar detalle del personaje
  function buscarPersonaje(id, accion) {
    fetch(`${URL}/characters/${id}`)
      .then((response) => response.json())
      .then((personaje) => {
        bloqueDetalle.classList.remove("oculto")
        imgPersonaje.src = personaje.image
        personajeActual = personaje

        if (accion === "solo_imagen") {
          infoPersonaje.classList.add("oculto")
          controlesTransformacion.classList.add("oculto")
        } else if (accion === "todo_detalle") {
          infoPersonaje.classList.remove("oculto")
          txtNombre.textContent = personaje.name
          txtKi.textContent = personaje.ki
          txtGenero.textContent = personaje.gender
          txtDescripcion.textContent = personaje.description

          if (personaje.transformations && personaje.transformations.length > 0) {
            controlesTransformacion.classList.remove("oculto")
            selectTransformacion.innerHTML = ""

            personaje.transformations.forEach(trans => {
              const opcion = document.createElement("option")
              opcion.value = trans.id
              opcion.textContent = trans.name
              selectTransformacion.appendChild(opcion)
            })
          } else {
            controlesTransformacion.classList.add("oculto")
          }
        }
      })
      .catch((error) => {
        console.error("Error en buscar el detalle", error)
        alert("Error al obtener el detalle del personaje")
      })
  }
})
