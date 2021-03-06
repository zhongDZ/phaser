var Tile = require('../Tile');
var IsInLayerBounds = require('./IsInLayerBounds');
var RecalculateFacesAt = require('./RecalculateFacesAt');

/**
 * Removes the tile at the given tile coordinates in the specified layer and updates the layer's
 * collision information.
 *
 * @param {integer|Tile} tile - The index of this tile to set or a Tile object.
 * @param {integer} tileX - [description]
 * @param {integer} tileY - [description]
 * @param {boolean} [replaceWithNull=true] - If true, this will replace the tile at the specified
 * location with null instead of a Tile with an index of -1.
 * @param {boolean} [recalculateFaces=true] - [description]
 * @param {LayerData} layer - [description]
 * @return {Tile} The Tile object that was removed.
 */
var RemoveTileAt = function (tileX, tileY, replaceWithNull, recalculateFaces, layer)
{
    if (replaceWithNull === undefined) { replaceWithNull = false; }
    if (recalculateFaces === undefined) { recalculateFaces = true; }
    if (!IsInLayerBounds(tileX, tileY, layer)) { return null; }

    var tile = layer.data[tileY][tileX];
    if (tile === null)
    {
        return null;
    }
    else
    {
        layer.data[tileY][tileX] = replaceWithNull
            ? null
            : new Tile(layer, -1, tileX, tileY, tile.width, tile.height);
    }

    // Recalculate faces only if the removed tile was a colliding tile
    if (recalculateFaces && tile && tile.collides)
    {
        RecalculateFacesAt(tileX, tileY, layer);
    }

    return tile;
};

module.exports = RemoveTileAt;
