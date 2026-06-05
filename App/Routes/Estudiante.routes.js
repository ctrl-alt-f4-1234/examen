module.exports = app =>{
  const Estudiante = require ("../Controller/Estudiante.controller.js");
  var router = require("express").Router();
  router.post("/create/", Estudiante.create);
  router.get("/", Estudiante.findAll);
  router.get("/:id", Estudiante.findOne);
  router.delete("/delete/:id", Estudiante.delete);
  router.delete("/delete/", Estudiante.deleteAll);
  router.put("/update/:id", Estudiante.update);
  app.use("/api/estudiante", router);
};