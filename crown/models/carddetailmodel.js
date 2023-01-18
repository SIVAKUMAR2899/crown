const dbconfig = require('../config/dbconfig');

module.exports = (sequelize, DataTypes) => {
    const Carddetail = sequelize.define('cardDetails', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.INTEGER,
        },
        card_id: {
            type: DataTypes.INTEGER,
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

return Carddetail

};