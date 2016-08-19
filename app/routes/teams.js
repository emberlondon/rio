import Ember from 'ember';
import fetch from 'ember-network/fetch'
import service from 'ember-service/inject';

export default Ember.Route.extend({
  fastboot: service(),

  model() {
    let isFastboot = this.get('fastboot.isFastBoot');
    let shoebox = this.get('fastboot.shoebox');

    if (isFastboot) {
      return fetch('http://www.medalbot.com/api/v1/medals')
        .then(res => res.json())
        .then(json => {
          shoebox.put('medals', json);
          return json;
        });
    } else {
      let medals = shoebox.retrieve('medals');

      if (medals) {
        return medals;
      } else {
        return fetch('/api/v1/medals').then(res => res.json());
      }
    }
  }
});
