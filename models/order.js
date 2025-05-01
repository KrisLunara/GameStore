'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    Order.init({
        //TODO finish adding table cols
        name: DataTypes.STRING,

        friendlyPublishedDate: {
            type: DataTypes.VIRTUAL,
            get() {
                return moment(this.published_on).format('MMMM Do, YYYY')
            }
        }
    }, {
        sequelize,
        modelName: 'orderList',
        timestamps:false,
        tableName:'game_orders'
    });
    return Order;
};