# Krabbekrigtutorial
### @activities true

```template
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
for (let index = 0; index < 4; index++) {
    krabbeRobot = sprites.create(assets.image`robotKrabbe`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(krabbeRobot, assets.tile`transparency16`)
    krabbeRobot.follow(minRobot)
}
# Lag et spill om den store krabbekrigen
## introdduksjon
### intro @unplugged

Professor K. Rabbe har laget en gigantisk hær av robotkrabber! Roboten din må lage alt den trenger for å overleve angrepene fra robotkrabbene. Steg 1: Test spillet og se om du klarer å overleve første angrepsbølge!

### Steg 2: Bruk teiner fra fabrikken til å fange krabberobotene før de skader roboten din.

```blocks
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
```


<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
