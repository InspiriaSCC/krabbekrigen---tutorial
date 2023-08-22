namespace SpriteKind {
    export const fabrikk = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite)
})
let krabbeRobot: Sprite = null
info.setLife(6)
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level2`)
let minRobot = sprites.create(assets.image`minRobot`, SpriteKind.Player)
controller.moveSprite(minRobot)
scene.cameraFollowSprite(minRobot)
tiles.placeOnRandomTile(minRobot, sprites.castle.tileGrass1)
let mySprite = sprites.create(assets.image`robotFabrikk`, SpriteKind.fabrikk)
tiles.placeOnTile(mySprite, tiles.getTileLocation(15, 16))
for (let index = 0; index < 5; index++) {
    krabbeRobot = sprites.create(assets.image`robotKrabbe`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(krabbeRobot, assets.tile`transparency16`)
    krabbeRobot.follow(minRobot)
}
