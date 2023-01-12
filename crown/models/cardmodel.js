const dbconfig = require('../config/dbconfig');

module.exports = (sequelize, DataTypes) => {
    const Card = sequelize.define('userCard', {
        UCid: {
            type: DataTypes.INTEGER,
            autoincrement: true,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.INTEGER,
        },
        card_id: {
            type: DataTypes.INTEGER,
        }
    },
    {
        timestamps: false
    }
);

return Card

};