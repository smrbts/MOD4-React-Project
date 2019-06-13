const Sequelize = require('sequelize')

const STRING = Sequelize.STRING
const INTEGER = Sequelize.INTEGER

//Open Database Connection
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
})

//Create the Schema
const Leagues = sequelize.define('leagues',{
    id:{
      type: INTEGER,
      primaryKey: true
    },
    userId: {type: INTEGER},
    leagueName: {type: STRING},
    imageURL: {type: STRING},
    description: {type: STRING}
})

module.exports = Leagues

sequelize.sync()
