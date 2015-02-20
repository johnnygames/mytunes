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
      // this.remove(this.at(0));
      if(this.length !== 0){
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(song){
      if (this.at(0) === song) {
        this.playNext();
      } else {
        this.remove(song);
      }
    }, this);
  },

  playNext: function(){
    this.shift();
    if( this.length >= 1 ){
      this.playFirst();
    } else {
      this.trigger('stop');
    }
  },

  playFirst: function(){
    var nextSong = this.at(0);
    nextSong.play();
  }

});

//can add dequeue here and check if its first song (trigger 'stop') or if not play next song
//who listens to stop? might want to think about what happens to the current song