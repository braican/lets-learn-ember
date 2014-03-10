App = Ember.Application.create();

// defines all of the urls in the app
App.Router.map(function(){
    
    this.resource('about');

    this.resource('breweries', function(){
        this.resource('brewery', {
            path: ':brewery_id'
        }); 
    });
    
});

App.BreweriesRoute = Ember.Route.extend({
    model: function(){
        return breweries;
    }
});

App.BreweryRoute = Ember.Route.extend({
    model: function(params){
        return breweries.findBy('id', params.brewery_id);
    }
});

App.BreweryController = Ember.ObjectController.extend({
    isEditing: false,

    actions:{
        edit: function(){
            this.set('isEditing', true);
        },

        doneEditing: function(){
            this.set('isEditing', false);
        }
    }
});

Ember.Handlebars.helper('brewery-website', function(website){
    return new Handlebars.SafeString('<a href="' + website + '">Site</a>');
});

var breweries = [{
    id: '1',
    name: "Harpoon Brewery",
    address: {
        street: "306 Northern Avenue",
        city: "Boston",
        state: "MA"
    },
    website: "http://www.harpoonbrewery.com/",
    latlng: {
        lat: '42.346592',
        lng: '-71.034508'
    }
}, {
    id: '2',
    name: "Samuel Adams",
    address: {
        street: "30 Germania Street",
        city: "Boston",
        state: "MA"
    },
    website: "http://www.samueladams.com/",
    latlng: {
        lat: '42.314369',
        lng: '-71.103424'
    }
}];