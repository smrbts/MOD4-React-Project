const Sequelize = require('sequelize')

const STRING = Sequelize.STRING
const INTEGER = Sequelize.INTEGER
const BOOLEAN = Sequelize.BOOLEAN

//Open Database Connection
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
})

//Create the Schema
const Stats = sequelize.define('stats',{
    id:{
      type: INTEGER,
      primaryKey: true
    },
    playerId: {type: INTEGER},
    career: {type: BOOLEAN},
    h: {type: INTEGER},
    d: {type: INTEGER},
    t: {type: INTEGER},
    hr: {type: INTEGER},
    r: {type: INTEGER},
    rbi: {type: INTEGER},
    bb: {type: INTEGER},
    sb: {type: INTEGER},
    cs: {type: INTEGER},
    avg: {type: INTEGER},
    p_w: {type: INTEGER},
    p_k: {type: INTEGER},
    p_era: {type: INTEGER},
    p_hwa: {type: INTEGER}
})

module.exports = Stats

sequelize.sync()
