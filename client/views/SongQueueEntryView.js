// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  model: SongModel,

  template: _.template('<li>(<%= artist %>)</td><td><%= title %></li>'),
  
  render: function() {
    this.$el.html(this.template(this.model.attributes));
  }
});
