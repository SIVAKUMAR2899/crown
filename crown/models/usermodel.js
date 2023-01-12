const dbconfig = require('../config/dbconfig');

module.exports = (sequelize, DataTypes) => {
    const Player = sequelize.define('users', {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.TEXT,
        },
        email: {
            type: DataTypes.TEXT,
        },
        crown_id: {
            type: DataTypes.INTEGER,
        },
        exp_id: {
            type: DataTypes.INTEGER,
        },
        card_id: {
            type: DataTypes.INTEGER,
        },
    },
    {
        timestamps: false
    }
);

return Player

};