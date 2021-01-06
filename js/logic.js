var gameProperties = {
    screenWidth: 1270,
    screenHeight: 620,

    tileWidth: 32,
    tileHeight: 32,
 
    boardWidth: 10,
    boardHeight: 10,
};
 
var states = {
    game: 'game'
};

var graphicAssets = {
    tiles: {URL: 'assets/tiles.png', name: 'tiles', frames: 2}
};
 
var gameState = function(game) {
    this.boardTop;
    this.boardLeft;
    this.board;
};
 
gameState.prototype = {
    init: function() {
        var boardHeight = gameProperties.tileHeight * gameProperties.boardHeight;
        this.boardTop = (gameProperties.screenHeight - (boardHeight)) * 0.5;
        var boardWidth = gameProperties.tileWidth * gameProperties.boardWidth;
        this.boardLeft = (gameProperties.screenWidth - (boardWidth)) * 0.5;
    },
     
    preload: function() {
        game.load.spritesheet
        (
            graphicAssets.tiles.name,
            graphicAssets.tiles.URL,
            gameProperties.tileWidth,
            gameProperties.tileHeight,
            graphicAssets.tiles.frames
        );
    },
     
    create: function() {
        this.initBoard();
    },
 
    update: function() {
         
    },

    initBoard: function() {
        this.board = new Board(gameProperties.boardWidth, gameProperties.boardHeight);
    },
};
 
var game = new Phaser.Game
(
    gameProperties.screenWidth,
    gameProperties.screenHeight,
    Phaser.AUTO,
    'wrapper'
);
game.state.add(states.game, gameState);
game.state.start(states.game);