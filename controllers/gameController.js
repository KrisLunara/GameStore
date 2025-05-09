const {Game} = require('../models/gameListing');
const genres = ['Action', 'Adventure', 'Fighting', 'Platformer',
    'Puzzle', 'Racing', 'Rhythm', 'RPG', 'Sandbox', 'Shooter',
    'Simulation', 'Sports', 'Strategy'];
const platforms = ['Dreamcast', 'GameCube', 'Gameboy', 'Gameboy Color',
    'Gameboy Advance','NES', 'Nintendo 64', 'Nintendo Switch', 'Nintendo Switch 2',
    'PlayStation', 'PlayStation 2', 'PlayStation 3', 'PlayStation 4',
    'PlayStation 5', 'PS Vita', 'Sega CD', 'Sega Genesis', 'Sega Saturn',
    'Super NES', 'Wii', 'Wii U', 'Xbox', 'Xbox 360', 'Xbox One', 'Xbox Series X/S']

module.exports.renderAddForm = function(req,res){
    const game = {
        title: '',
        description: '',
        platform: platforms[0],
        genre: genres[0]
    };
    res.render('games/add', {game, platforms, genres});
}