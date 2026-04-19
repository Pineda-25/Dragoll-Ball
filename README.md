# Explorador Dragon Ball

Una aplicación web interactiva que permite explorar y descubrir información detallada sobre los personajes del universo de Dragon Ball, filtrados por raza.

## Descripción del Proyecto

Este proyecto es una aplicación Full Stack que consume la API de Dragon Ball para mostrar una lista de personajes filtrados por su raza. Permite visualizar información detallada de cada personaje incluyendo:
- Nombre
- Ki 
- Género
- Descripción
- Imagen
- Transformaciones disponibles

## Inicio Rápido

### Requisitos Previos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexión a internet (para consumir la API)
- Git (opcional, para clonar el repositorio)

### Clonar el Repositorio

```bash
# Clona el repositorio
git clone https://github.com/Pineda-25/Dragoll-Ball.git


# Abre el archivo HTML en tu navegador
# Opción 1: Abre directamente HTML/index.html en tu navegador
# Opción 2: Usa un servidor local (recomendado)
```

### Usar un Servidor Local

Si deseas ejecutar la aplicación con un servidor local:

**Con Python 3:**
```bash
python -m http.server 8000
# Accede a http://localhost:8000/HTML/
```

**Con Node.js (http-server):**
```bash
npm install -g http-server
http-server
# Accede a http://localhost:8080/HTML/
```

**Con Live Server en VS Code:**
- Abre la carpeta en VS Code
- Instala la extensión "Live Server"
- Click derecho en `HTML/index.html` → "Open with Live Server"

## 📁 Estructura del Proyecto

```
Tarea 2/
├── HTML/
│   └── index.html           # Página principal de la aplicación
├── CSS/
│   └── stilo.css            # Estilos y diseño de la aplicación
├── JS/
│   └── app.js               # Lógica de la aplicación (JavaScript)
├── IMG/
│   └── [imágenes locales]   # Imágenes de la aplicación
├── MP4/
│   └── tarea.mp4            # Video de fondo
├── vista/
│   └── [archivos adicionales] # Archivos de visualización alternativa
└── README.md                
```

## Fuente de Datos - API Dragon Ball

**URL de la API:** `https://dragonball-api.com/api`

Esta aplicación utiliza la **Dragon Ball API** que proporciona información completa sobre los personajes del anime y manga Dragon Ball.

### Endpoints Utilizados

1. **Obtener personajes por raza:**
   ```
   GET https://dragonball-api.com/api/characters?race=RACE
   ```
   
   **Razas disponibles:**
   - Human (Humano)
   - Saiyan (Saiyajin)
   - Namekian (Namekiano)
   - Majin
   - Frieza Race (Raza de Freezer)
   - Android (Androide)
   - Jiren Race (Raza de Jiren)
   - God (Dios)
   - Angel (Ángel)
   - Evil (Maligno)
   - Nucleico
   - Nucleico benigno
   - Unknown (Desconocido)

2. **Datos devueltos por personaje:**
   ```json
   {
     "id": 1,
     "name": "Nombre del Personaje",
     "ki": "10000",
     "maxKi": "15000",
     "race": "Saiyan",
     "gender": "Male",
     "description": "Descripción del personaje",
     "image": "URL de la imagen",
     "affiliation": "Z Fighter",
     "transformations": [...]
   }
   ```

##  Cómo Usar la Aplicación

1. **Abre el archivo** `HTML/index.html` en tu navegador
2. **Selecciona una raza** del menú desplegable
3. **Haz clic en "Mostrar"** para ver todos los personajes de esa raza
4. **Haz clic en "Detalle"** de cualquier personaje para ver más información
5. **En la sección de detalles:**
   - Verás la imagen del personaje
   - Información como Ki, género y descripción
   - Si tiene transformaciones, podrás verlas en el menú desplegable

## Características de Diseño

- **Video de fondo dinámico:** Efecto visual con video MP4
- **Interfaz transparente:** Elementos con efecto blur (desenfoque) para mejor legibilidad
- **Tabla interactiva:** Hover effects en las filas
- **Botones estilizados:** Con efectos de transición y escala
- **Inputs y selects personalizados:** Con transparencia y efectos blur
- **Diseño responsive:** Adaptable a diferentes tamaños de pantalla

##  Tecnologías Utilizadas

- **HTML5:** Estructura de la página
- **CSS3:** Estilos avanzados con backdrop-filter y efectos visuales
- **JavaScript (Vanilla):** Lógica de la aplicación sin frameworks
- **Fetch API:** Consumo de datos desde la API
- **Dragon Ball API:** Base de datos de personajes



##  Solución de Problemas

### El video no carga
- Verifica que el archivo `MP4/tarea.mp4` exista
- Asegúrate de usar un servidor local en lugar de abrir el archivo directamente

### La API no responde
- Comprueba tu conexión a internet
- Verifica que `https://dragonball-api.com/api` esté en línea
- Intenta recargar la página


##  Notas Importantes

- La aplicación requiere conexión a internet para funcionar (consume API externa)
- El servidor local es recomendado para desarrollo
- Todos los datos de personajes provienen de la Dragon Ball API

##  Autor

- **Nombre:** Pineda-25
- **Repositorio:** https://github.com/Pineda-25/Dragoll-Ball

## Licencia

Este proyecto utiliza datos de la Dragon Ball API.

---

**¡Disfruta explorando el universo de Dragon Ball!** 
