// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {

    this.on('add', function() {
      if(this.length === 1) {
        this.playFirst()
      }
    }, this);

    this.on('ended', function () {
      this.remove(this.models[0]);
      if (this.models.length !== 0) {
        this.playFirst();
      } else {
        return;
      }
    }, this);

    this.on('dequeue', function() {
      this.remove(this.models[0]);
    }, this)

  },
  playFirst: function() {

    this.models[0].play();
  }
});
