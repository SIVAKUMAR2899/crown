const dbconfig = require('../config/dbconfig');

module.exports = (sequelize, DataTypes) => {
    const Card = sequelize.define('cardDetails', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.INTEGER,
        },
        cardName: {
            type: DataTypes.TEXT,
        },
        cardExp: {
            type: DataTypes.INTEGER,
        },
        cardLevel: {
            type: DataTypes.INTEGER,
        }
    },
    {
        timestamps: false
    }
);

return Card

};