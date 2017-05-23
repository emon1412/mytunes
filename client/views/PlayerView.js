// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {

    console.log('this.model.ended in init: ', this.model.ended);
    this.model.on('ended', function() {
      console.log('inside initialize on "ended"');
      this.model.dequeue();
      this.setSong(songQueue.models[0]);
      this.model.playFirst();
    }, this);
  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
