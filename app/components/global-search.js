import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';
const { computed, isPresent, inject: { service }, run } = Ember;

export default Ember.Component.extend({
  showModal: false,
  selectedCategory: 'all',

  ajax: service(),

  isAll: computed.equal('selectedCategory', 'all'),

  autoSuggest: task(function * (text) {
    let results = yield this.get('ajax').request('/auto-suggest', {
      method: 'get',
      data: {
        searchText: text
      }
    });
    return results;
  }),

  updateSearch: task(function * ({ title }) {
    this.set('seachText', title);

    if (!this.get('showModal')) {
      this.set('showModal', true);

      //TODO Fix: the element isn't ready on the page by the time this happens
      if (isPresent(Ember.$)) {
        run.schedule('afterRender', () => {
          this.$('.global-search-search .input-text').focus();
        });
      }
    }

    if (isPresent(title)) {
      yield timeout(50);

      let results = yield this.get('ajax').request('/search', {
        method: 'post',
        data: {
          searchText: title
        }
      });

      let totalCount = results.categories
                        .map((category) => category.count)
                        .reduce((total, category) => total + category);

      this.set('totalCount', totalCount);
      this.set('results', results);
    } else {
      //TODO: Tear down, reset state
    }

  }).restartable(),

  actions: {
    toggleModal() {
      this.toggleProperty('showModal');
    },

    viewAllResult(title) {
      this.set('selectedCategory', title);
      if (!this.get('isAll')) {
        let categoryResults = this.get('results.categories').findBy('title', title);
        this.set('categoryResults', categoryResults);
      }
    }
  }
});
