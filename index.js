const express = require("express");
const fs = require("fs");
const app = express();
const expressFileUpload = require("express-fileupload");

app.listen(3000, () => console.log("Server ON 3000"));

//middleware con los parametros de uso
app.use(
  expressFileUpload({
    limits: { fileSize: 5000000 },
    abortOnLimit: true,
    responseOnLimit:
      "El peso del archivo que intentas subir supera limite permitido ",
  })
);
//Definir la ruta public
app.use(express.static("public"));

//Ruta raíz para el formulario principal
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/formulario.html");
});

//Ruta para el collage
app.get("/collage", (req, res) => {
  res.sendFile(__dirname + "/public/collage.html");
});

//Ruta POST/imagen
//Ruta para el collage
app.post("/imagen", (req, res) => {
  // console.log("Valor de req: ", req);
  console.log("Valor de req.files: ", req.files);
  // doble destructuring, la propiedad foto la toma del name del input
  const { target_file } = req.files;
  // const { name } = target_file;
  //extraer del body la posición
  const { posicion } = req.body;
  console.log("target_file: ", target_file);
  console.log("posicion: ", posicion);

  // aplico metodo mv mover archivos a traves de http

  target_file.mv(`${__dirname}/public/imgs/imagen-${posicion}.jpg`, (err) => {
    // res.send("Archivo cargado con éxito");
    if (err) res.status(500).send(err);
    res.redirect("/collage");
  });

  // target_file.mv(`${__dirname}/public/imgs/imagen-${posicion}.jpg`, (err) => {
  //     if (err) res.status(500).send(err)
  //     res.redirect("/collage");
  //   });
});

// Ruta DELETE /imagen/:nombre para eliminar una imagen por nombre
app.get("/deleteImg/:nombre", (req, res) => {
  const nombreImagen = req.params.nombre;
  console.log("nombreimagen: ", nombreImagen);
  const imagePath = `public/imgs/${nombreImagen}`; // Ruta relativa directa


  // Eliminar el archivo
  fs.unlink(imagePath, (err) => {
    if (err) {
      return res.status(500).send("Error al intentar eliminar la imagen");
    }
    // res.status(200).send("Imagen eliminada correctamente");
    res.sendFile(__dirname + "/public/collage.html");
  });
});
