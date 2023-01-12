const dbconfig = require('../config/dbconfig');

module.exports = (sequelize, DataTypes) => {
    const exp = sequelize.define('expCount', {
        id: {
            type: DataTypes.INTEGER,
            autoincrement: true,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.INTEGER,
        },
        expCount: {
            type: DataTypes.INTEGER,
        }
    },
    {
        timestamps: false
    }
);

return exp

};