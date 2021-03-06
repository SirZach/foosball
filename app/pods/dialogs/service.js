import Ember from 'ember';

const {
  Service,
  set
} = Ember;

export default Service.extend({
  newGame: false,

  editFoosballer: false,

  editSeason: false,

  editLeague: false,

  toggleDialog(dialogName) {
    this.toggleProperty(dialogName);
  },

  actions: {
    toggleDialog(dialogName) {
      this.toggleDialog(dialogName);
    }
  }
});
