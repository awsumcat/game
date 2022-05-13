input.onButtonPressed(Button.A, function () {
    enemy.change(LedSpriteProperty.X, 1)
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("C5 G A B E G F C ", 120)
    game.setScore(0)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    enemy.change(LedSpriteProperty.X, -1)
})
let enemy: game.LedSprite = null
let speed = 5
let level = 0
game.setScore(0)
enemy = game.createSprite(2, 4)
let player = game.createSprite(randint(0, 4), 0)
basic.forever(function () {
    player.change(LedSpriteProperty.Y, 1)
    basic.pause(2000)
    if (enemy.isTouching(player)) {
        music.playMelody("- - C G - D - C ", 120)
        game.gameOver()
    }
    if (player.get(LedSpriteProperty.Y) == 4) {
        game.addScore(1)
        music.playTone(415, music.beat(BeatFraction.Whole))
        player.set(LedSpriteProperty.Y, 0)
        player.set(LedSpriteProperty.X, randint(0, 4))
    }
    if (game.score() == 5) {
        level += 1
        basic.pause(speed)
        speed += -100
        music.playTone(988, music.beat(BeatFraction.Whole))
    }
})
