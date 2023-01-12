const dbconfig = require('../config/dbconfig');

module.exports = (sequelize, DataTypes) => {
    const Carddetail = sequelize.define('cardDetails', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        UCid: {
            type: DataTypes.INTEGER,
        },
        user_id: {
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