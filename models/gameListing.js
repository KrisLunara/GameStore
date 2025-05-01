'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Game extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    Game.init({
        //TODO finish game cols
        name: DataTypes.STRING,
        devs: DataTypes.STRING,
        publisher: DataTypes.STRING,
        stock: DataTypes.INTEGER,
        friendlyPublishedDate: {
            type: DataTypes.VIRTUAL,
            get() {
                return moment(this.published_on).format('MMMM Do, YYYY')
                //TODO Make sure release date works
            }
        }
    }, {
        sequelize,
        modelName: 'gameListing',
        timestamps:false,
        tableName:'game_games'
    });
    return Game;
};