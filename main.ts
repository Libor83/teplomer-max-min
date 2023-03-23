input.onButtonPressed(Button.A, function () {
    basic.showNumber(min)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(max)
})
let min = 0
let max = 0
let aktuální_teplota = input.temperature()
max = aktuální_teplota
min = aktuální_teplota
basic.forever(function () {
    basic.showString(".")
    aktuální_teplota = input.temperature()
    if (aktuální_teplota < min) {
        min = aktuální_teplota
    }
    if (aktuální_teplota > max) {
        max = aktuální_teplota
    }
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(1000)
})
