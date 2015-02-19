// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({
  //The Songs collection holds a bunch of 'SongModel's, a collection is similar to a model except you can do array like stuff to it
  // i think
  model: SongModel

});