// const sequelize = require('sequelize');
const dbconfig = require('../config/dbconfig');

const {Sequelize,DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbconfig.DB,
    dbconfig.USER,
    dbconfig.PASSWORD,{
        host: dbconfig.HOST,
        dialect: dbconfig.dialect,
        // operatorsAliases: false,

        pool:{
            max: dbconfig.pool.max,
            min: dbconfig.pool.min,
            acquire: dbconfig.pool.acquire,
            idle: dbconfig.pool.idle
        }
    }
)

sequelize.authenticate()
.then(()=>{
    console.log('connected..')
})
.catch(err => {
    console.log('Error'+ err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize


db.users = require('./usermodel')(sequelize, DataTypes)
db.crownCounts = require('./crownmodel')(sequelize, DataTypes)
db.expCounts = require('./expmodel')(sequelize, DataTypes)
db.cardDetails = require('./carddetailmodel')(sequelize, DataTypes)

db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})

db.users.hasMany(db.crownCounts, {
    foreignKey: 'user_id',
    as: 'crown'
})
db.users.hasMany(db.expCounts, {
    foreignKey: 'user_id',
    as: 'exp'
})
db.users.hasMany(db.cardDetails, {
    foreignKey: 'user_id',
    as: 'carddetail'
})

module.exports = db;