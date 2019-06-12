const Sequelize = require('sequelize')

const STRING = Sequelize.STRING
const INTEGER = Sequelize.INTEGER
// const (STRING) = Sequelize (Samething but different syntax)

//Open Database Connection
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
})

// //Create the Table / Schema
// const Painting = sequelize.define('painting',{
//   title: {
//     type: STRING
//   },
//   image: {
//     type: STRING
//   },
//   description: {
//     type: STRING
//   },
//   id: {
//     primaryKey: true,
//     type: INTEGER
//   }
// })
//
// module.exports = Painting

sequelize.sync()
