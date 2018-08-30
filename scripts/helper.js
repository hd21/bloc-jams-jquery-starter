class Helper {
  constructor() {
    this.currentlyPlaying = album.songs[0];
    this.playState = 'stopped';
    this.volume = 80;
    this.soundObject = new buzz.sound(this.currentlyPlaying.soundFileUrl);
  }

  playPauseAndUpdate(song) {
    const totalTime = player.getDuration();
    const prettyTotalTime = player.prettyTime(totalTime);
    $('#time-control .total-time').text(prettyTotalTime);
    player.playPause(song);
  }
}

const helper = new Helper();
