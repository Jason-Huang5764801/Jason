小时 = 0
分钟 = 0
秒 = 0

def on_button_pressed_b():
    global 小时, 分钟, 秒
    小时 = 3
    分钟 = 32
    秒 = 0
    timeanddate.set_time(小时, 分钟, 0, timeanddate.MornNight.PM)
    while True:
        basic.show_string(timeanddate.time(timeanddate.TimeFormat.HHMMSS2_4HR))
        basic.pause(60 * 1000)
        秒 = 秒 + 1
        if 秒 == 60:
            pass
        continue
input.on_button_pressed(Button.B, on_button_pressed_b)
