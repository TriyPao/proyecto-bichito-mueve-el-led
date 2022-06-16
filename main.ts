let x = 2
let y = 2
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    if (input.logoIsPressed()) {
        if (y < 4) {
            led.unplot(x, y)
            y += 1
            led.plot(x, y)
            basic.pause(100)
        }
    }
    if (true) {
    	
    }
})
