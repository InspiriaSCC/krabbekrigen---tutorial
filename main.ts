sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite)
})
let krabbeRobot: Sprite = null
info.setLife(6)
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`level3`)
let minRobot = sprites.create(img`
    ........................
    ...........bb...........
    ..........bbbb..........
    ........bbbbbbbb........
    .......bbbbbbbbbb.......
    .......bf2f33f2fb.......
    .......bbbb33bbbb.......
    ........babaabab........
    .........ab33ba.........
    ........babaabab........
    .....cbbbbbbbbbbbbc.....
    ....cbcbaaaaaaaabcbc....
    ...bbcbca666666acbcbb...
    ..b2bbc..a5555a..cbb2b..
    .5422b....a66a....b2245.
    .544b....bbaabb....b445.
    5555....bbb..bbb....5555
    55......ccc..ccc......55
    ........bbb..bbb........
    ........ccc..ccc........
    ........bbb..bbb........
    .......5424554245.......
    ........545..545........
    .........5....5.........
    `, SpriteKind.Player)
controller.moveSprite(minRobot)
scene.cameraFollowSprite(minRobot)
tiles.placeOnRandomTile(minRobot, sprites.castle.tileGrass1)
let mySprite = sprites.create(assets.image`robotFabrikk`, SpriteKind.Food)
tiles.placeOnTile(mySprite, tiles.getTileLocation(15, 16))
for (let index = 0; index < 4; index++) {
    krabbeRobot = sprites.create(img`
        . . . . . . 1 . . 1 . . . . . . 
        . . . . . 1 f 1 1 f 1 . . . . . 
        . . 2 2 . . 1 . . 1 . . 2 2 . . 
        . 2 . . 2 . 2 . . 2 . 2 . . 2 . 
        2 . 2 . . 2 2 2 2 2 2 . . 2 . 2 
        . 2 . 2 2 2 2 2 2 2 2 2 2 . 2 . 
        2 . . 2 2 2 2 2 2 2 2 2 2 . . 2 
        . . 2 . 2 2 2 2 2 2 2 2 . 2 . . 
        . 2 . 2 . 2 2 2 2 2 2 . 2 . 2 . 
        2 . . . 2 . . . . . . 2 . . . 2 
        . . 2 2 2 2 . . . . 2 2 2 2 . . 
        . . 2 2 2 . . . . . . 2 2 2 . . 
        . . . 2 2 2 2 . . 2 2 2 2 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(krabbeRobot, assets.tile`transparency16`)
    krabbeRobot.follow(minRobot)
}
