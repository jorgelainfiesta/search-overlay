export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  this.timing = 2000;

  this.get('/auto-suggest', function() {
    return [
      {
        id: 1,
        title: 'Lorem ipsum',
        coutry: 'India'
      },
      {
        id: 2,
        title: 'Dolor sit a ment',
        coutry: 'India'
      },
      {
        id: 3,
        title: 'Qui solus est',
        coutry: 'India'
      },
      {
        id: 1,
        title: 'Lorem ipsum',
        coutry: 'India'
      },
      {
        id: 2,
        title: 'Dolor sit a ment',
        coutry: 'India'
      },
      {
        id: 3,
        title: 'Qui solus est',
        coutry: 'India'
      },
      {
        id: 1,
        title: 'Lorem ipsum',
        coutry: 'India'
      },
      {
        id: 2,
        title: 'Dolor sit a ment',
        coutry: 'India'
      },
      {
        id: 3,
        title: 'Qui solus est',
        coutry: 'India'
      }
    ];
  });

  this.post('/search', function() {
    return {
      categories: [
        {
          title: 'Payees',
          count: 10,
          results: [
            {
              id: 1,
              title: 'Lorem ipsum',
              coutry: 'India'
            },
            {
              id: 2,
              title: 'Dolor sit a ment',
              coutry: 'India'
            },
            {
              id: 3,
              title: 'Qui solus est',
              coutry: 'India'
            },
            {
              id: 1,
              title: 'Lorem ipsum',
              coutry: 'India'
            },
            {
              id: 2,
              title: 'Dolor sit a ment',
              coutry: 'India'
            },
            {
              id: 3,
              title: 'Qui solus est',
              coutry: 'India'
            },
            {
              id: 1,
              title: 'Lorem ipsum',
              coutry: 'India'
            },
            {
              id: 2,
              title: 'Dolor sit a ment',
              coutry: 'India'
            },
            {
              id: 3,
              title: 'Qui solus est',
              coutry: 'India'
            }
          ]
        },
        {
          title: 'Payers',
          count: 6,
          results: [
            {
              id: 1,
              title: 'Lorem ipsum',
              coutry: 'India'
            },
            {
              id: 2,
              title: 'Dolor sit a ment',
              coutry: 'India'
            },
            {
              id: 3,
              title: 'Qui solus est',
              coutry: 'India'
            },
            {
              id: 1,
              title: 'Lorem ipsum',
              coutry: 'India'
            },
            {
              id: 2,
              title: 'Dolor sit a ment',
              coutry: 'India'
            },
            {
              id: 3,
              title: 'Qui solus est',
              coutry: 'India'
            }
          ]
        },
        {
          title: 'Other',
          count: 1,
          results: [
            {
              id: 1,
              title: 'Lorem ipsum',
              coutry: 'India'
            }
          ]
        }
      ]
    };
  });

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */
}
