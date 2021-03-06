/**
 * [description]
 *
 * @function Phaser.Geom.Rectangle.Offset
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Rectangle} rect - [description]
 * @param {number} x - [description]
 * @param {number} y - [description]
 *
 * @return {Phaser.Geom.Rectangle} [description]
 */
var Offset = function (rect, x, y)
{
    rect.x += x;
    rect.y += y;

    return rect;
};

module.exports = Offset;
