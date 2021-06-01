input.onButtonPressed(Button.A, function () {
    radio.sendValue("A", 1)
})
function server_send () {
    if (input.acceleration(Dimension.X) != n_x || input.acceleration(Dimension.Y) != n_y) {
        radio.sendValue("x", input.acceleration(Dimension.X))
        radio.sendValue("y", input.acceleration(Dimension.Y))
        n_x = input.acceleration(Dimension.X)
        n_y = input.acceleration(Dimension.Y)
    }
}
input.onButtonPressed(Button.B, function () {
    radio.sendValue("A", 0)
})
let n_y = 0
let n_x = 0
radio.setGroup(54)
n_x = 0
n_y = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    server_send()
})
