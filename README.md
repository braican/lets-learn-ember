Ember.js
================

A sandbox for ember.js stuff. Beginning from Boston Front End Meetup's Ember all the things, February 26, 2014 at the Brightcove office in Boston. Talk by Brian Cardarella

My notes
--------------

### Ember.js concepts
* single source of truth
* URL based applications 
  * nested routes represent nested UI
  * states of application are reflected
* `Ember.Object`
  * creating classes, inheritance, super
  * shared behaviors amongst classes
* define actions on controllers or routes

### Ember vs. Angular
* Angular - good at getting aps started, at cost of long-term maintainability
* Angular - better with animations
* Angular - better to demo (like To Do app), but less scalability
* Angulat - way better at testing
* Ember -  forces conventions that forces maintainability

### Code samples
`.get()`
`.set()`

`var person = Ember.Object.create({person: "Nick"})`
`person.get('person') -> "Nick"`

`App = Ember.Application.create();`
* attaches instance of application to body tag

    Router.map(function(){
	    this.resource('posts', function(){
		    this.route('new');
		    this.route('show');
	    })
    })

`rollback()` rolls back model to last clean state

### Some links
* [Ember.js website](http://emberjs.com)
* IRC
  * emberjs dev channel

### Ember in the wild
* Discourse
* Yahoo
* Groupon
* LivingSocial
* Ally Bank
* Apple
* Netflix
* NBC News
* US Patent Office

### Other stuff
* Ember app kit - a rails like file structure or your ember app
* http://www.html5rocks.com/en/tutorials/es6/promises/