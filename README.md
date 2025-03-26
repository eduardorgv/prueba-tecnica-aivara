# Prueba técnica

## Instalación

Clonar el repositorio y navegar a la carpeta del proyecto:

```sh
git clone https://github.com/eduardorgv/prueba-tecnica-aivara.git
cd prueba-tecnica-aivara
```

Instalación de dependencias:

```sh
npm install
```

## Uso

Para inicializar el proyecto:

```sh
npm run dev
```

## Preguntas y respuestas

### a. ¿Qué métricas podríamos obtener de esa información?
Se podría llegar a obtener los precios de cada producto a partir de las ordenes que sólo tienen un producto, de esta manera ordenar y organizar cada uno de los productos de una manera más específica. También se podría saber cuales son los articulos más vendidos a partir de cuantas veces aparecen en cada una de las ordenes.

### b. ¿Cuántos elementos tiene el json?
Tiene 100 elementos.

### c. ¿Si el json tuviera millones de elementos como cargarías lo datos? ¿Como contarías la cantidad de elementos?
Lo mejor sería cargar la información a una base de datos para poder manejar grándes volumenes de información, de esta manera sería más sencillo contar la cantidad de elementos totales, además de poder consultarlos mediante una paginación para evitar tiempos excesivos al consultarla mediante algún filtro.