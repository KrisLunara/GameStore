const {Game} = require('../models/gameListing');
const genre = ['Action', 'Adventure', 'Fighting', 'Platformer',
    'Puzzle', 'Racing', 'Rhythm', 'RPG', 'Sandbox', 'Shooter',
    'Simulation', 'Sports', 'Strategy'];
const platform = ['Dreamcast', 'GameCube', 'NES', 'Nintendo 64',
    'PlayStation', 'PlayStation 2', 'PlayStation 3', 'PlayStation 4',
    'PlayStation 5', 'PS Vita', 'Sega CD', 'Sega Genesis', 'Sega Saturn',
    'Super NES', 'Wii', 'Wii U', 'Xbox', 'Xbox 360', 'Xbox One',
    'Xbox Series X/S']

module.exports.renderAddForm = function(req,res){
    const game = {
        game_name: '',
        description: '',
        platform: platform[0],
        genre: genre[0]
    };
    res.render('games/add', {game, platform, genre});
}