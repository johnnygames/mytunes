// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(){
      if(this.length === 1){
        this.playFirst();
      }
    }, this);

    this.on('ended', function() {
      this.shift();
      if(this.length !== 0){
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(){
      this.shift();
    }, this);
  },

  playFirst: function(){
    var nextSong = this.at(0);
    nextSong.play();
  }

});