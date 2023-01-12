const dbconfig = require('../config/dbconfig');

module.exports = (sequelize, DataTypes) => {
    const Crown = sequelize.define('crownCounts', {
        id: {
            type: DataTypes.INTEGER,
            autoincrement: true,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.INTEGER,
        },
        crownCount: {
            type: DataTypes.INTEGER,
        }
    },
    {
        timestamps: false
    }
);

return Crown

};