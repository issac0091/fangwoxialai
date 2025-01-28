basic.forever(function () {
    if (cbit_小车类.Line_Sensor(cbit_小车类.enPos.LeftState, cbit_小车类.enLineState.Black) && cbit_小车类.Line_Sensor(cbit_小车类.enPos.RightState, cbit_小车类.enLineState.Black)) {
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    }
})
