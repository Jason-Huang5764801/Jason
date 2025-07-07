let 小时 = 0
let 分钟 = 0
let 秒 = 0
input.onButtonPressed(Button.B, function () {
    小时 = 3
    分钟 = 52
    秒 = 0
    timeanddate.setTime(小时, 分钟, 秒, timeanddate.MornNight.PM)
    while (true) {
        basic.showString(timeanddate.time(timeanddate.TimeFormat.HHMMSS24hr))
        basic.pause(60 * 1000)
        秒 = 秒 + 1
        if (秒 == 60) {
            小时 = 小时 + 1
        }
        if (小时 == 25) {
            timeanddate.setTime(1, 0, 0, timeanddate.MornNight.AM)
        }
        continue;
    }
})
