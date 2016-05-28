import Ember from 'ember';
import { BusPublisherMixin } from 'ember-message-bus';

const { Route, get } = Ember;

export default Route.extend(BusPublisherMixin, {
  actions: {
    login(provider) {
      const { store } = this;
      let session = get(this, 'session');

      session
        .open('firebase', { provider })
        .then((data) => {
          return store
            .findAll('foosballer')
            .then((foosballers) => {
              let authedFoosballer = foosballers.findBy('uid', data.uid);

              if (authedFoosballer) {
                this.publish('foosballersFound', foosballers);
                this.transitionTo('home');
              } else {
                this.transitionTo('choose-fooser');
              }
            });
        });
    },

    logout() {
      let session = get(this, 'session');

      session.close();
    }
  }
});
