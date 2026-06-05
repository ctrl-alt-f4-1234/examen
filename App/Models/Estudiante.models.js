module.exports = (sequelize, Sequelize) =>

{
  const Estudiante = sequelize.define ("estudiante", {
nombre:{
  type: Sequelize.STRING
},
edad: {
  type: Sequelize.INTEGER
},
promedio: {
  type: Sequelize.INTEGER
}
  });
  return Estudiante
};