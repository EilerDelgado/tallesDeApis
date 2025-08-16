
## Descripción de las APIs

### 1. API de Clima (OpenWeatherMap)
- **Descripción**: Permite consultar el clima de una ciudad ingresada por el usuario.
- **Archivos**: 
  - [apiDeClima/clima.js](apiDeClima/clima.js)
  - [apiDeClima/index.html](apiDeClima/index.html)
- **API utilizada**: [OpenWeatherMap](https://openweathermap.org/)
- **Características**:
  - Muestra la temperatura y una descripción del clima.
  - Manejo de errores para ciudades no encontradas.

### 2. API de Imágenes (Pexels)
- **Descripción**: Muestra una galería de imágenes relacionadas con el término "comida".
- **Archivos**:
  - [apiDeImagenes/peticiones.js](apiDeImagenes/peticiones.js)
  - [apiDeImagenes/index.html](apiDeImagenes/index.html)
- **API utilizada**: [Pexels](https://www.pexels.com/)
- **Características**:
  - Muestra imágenes con información del fotógrafo.
  - Manejo de errores en caso de fallos en la carga.

### 3. PokeApi
- **Descripción**: Permite buscar información de un Pokémon por su nombre o seleccionarlo de una lista.
- **Archivos**:
  - [pokemonApi/pokeApi.js](pokemonApi/pokeApi.js)
  - [pokemonApi/index.html](pokemonApi/index.html)
  - [pokemonApi/styles.css](pokemonApi/styles.css)
- **API utilizada**: [PokeAPI](https://pokeapi.co/)
- **Características**:
  - Muestra la imagen, nombre y habilidades del Pokémon.
  - Manejo de errores para Pokémon no encontrados.

## Cómo Ejecutar el Proyecto

1. Clona este repositorio en tu máquina local.
2. Abre cada carpeta (`apiDeClima`, `apiDeImagenes`, `pokemonApi`) en tu navegador utilizando los archivos `index.html`.
3. Asegúrate de tener conexión a internet para que las APIs puedan ser consumidas correctamente.
