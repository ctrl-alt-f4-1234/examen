module.exports = (sequelize, Sequelize) =>

{
  const Estudiante = sequelize.define ("estudiante", {
id:{
  type: Sequelize.STRING,
  primaryKey: true
},
nombre:{
  type: Sequelize.STRING
},
edad: {
  type: Sequelize.STRING
},
promedio: {
  type: Sequelize.STRING
}
  });
  return Estudiante
};