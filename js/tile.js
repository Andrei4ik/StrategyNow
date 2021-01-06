var Tile = function(column, row, group) {
    var states = {
        DEFAULT : 0,
        FOREST  : 1

    };
    var currentState = states.DEFAULT;
    var currentValue = states.FOREST;

    var sprite = game.add.sprite
    (
        column * gameProperties.tileWidth,
        row * gameProperties.tileHeight,
        graphicAssets.tiles.name,
        currentState,
        group
    );
};