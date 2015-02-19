// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});
    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong')); //why is this here and not somewhere else? GENIUS
    }, this);

    this.playerView.on('ended', function(){
      this.model.get('songQueue').shift();
      if(this.model.get('songQueue').length !== 0){
        this.model.get('songQueue').playFirst();
      }
      this.songQueueView.render(); // what if the 'this' here is referring to something else? 
    }, this);
  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
      this.songQueueView.$el
    ]);
  }

});
