# Desafío - Collage de imágenes

## Descripción del Proyecto

Crear un servidor con Express y el paquete express-fileupload para almacenar las imágenes.
Se entregan 2 archivos html como base.

## Sobre el proyecto 🚀

### :scroll: Contexto :scroll:

Un fotógrafo quiere actualizar su sitio web y piensa agregar una sección que muestre un collage de imágenes con sus mejores fotos. 

### ✨ Requerimientos ✨

👌 1. Integrar express-fileupload a Express

👌 2. Definir que el límite para la carga de imágenes es de 5MB. 

👌 3. Responder con un mensaje indicando que se sobrepasó el límite especificado

👌 4. Crear una ruta POST /imagen que reciba y almacene una imagen en una carpeta pública del servidor. Considerar que el formulario envía un payload con una propiedad “position”, que indica la posición del collage donde se deberá mostrar la imagen.

👌 5. Crear una ruta DELETE /imagen/:nombre que reciba como parámetro el nombre de una imagen y la elimine de la carpeta en donde están siendo alojadas las imágenes. Considerar que esta interacción se ejecuta al hacer click en alguno de los números del collage. 

