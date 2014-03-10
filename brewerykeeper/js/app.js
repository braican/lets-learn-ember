
var client_secret = '8EB0A20DDC4D23AA58BD8A0EC6EF2AB9F5A75BE4',
    client_id = '94284E70E3EC9ED86411018A5ABADFC8160A15F9',
    ALL_BEERS = [];


App = Ember.Application.create();

// defines all of the urls in the app
App.Router.map(function(){
    
    this.resource('about');

    this.resource('breweries', function(){
        this.resource('brewery', {
            path: ':brewery_recent_checkin_id'
        }); 
    });
    
});

App.BreweriesRoute = Ember.Route.extend({
    model: function(){
        return $.getJSON('http://api.untappd.com/v4/user/beers/braican?client_id=' + client_id + '&client_secret=' + client_secret).then(function(data){
            ALL_BEERS = data.response.beers.items;
            return data.response.beers.items;
        });
    }
});

App.BreweryRoute = Ember.Route.extend({
    model: function(params){
        console.log(ALL_BEERS);
        if(ALL_BEERS){
            return ALL_BEERS.findBy('recent_checkin_id', params.brewery_recent_checkin_id);    
        } else {
            return $.getJSON('http://api.untappd.com/v4/user/beers/braican?client_id=' + client_id + '&client_secret=' + client_secret).then(function(data){
                ALL_BEERS = data.response.beers.items;
                return data.response.beers.items;
            });
        }
        
    },

    serialize: function(brewery) {
        return { brewery_recent_checkin_id: brewery.recent_checkin_id };
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
