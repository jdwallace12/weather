Template.layout.helpers({
    curTemp: function() {
        var city = Session.get('city');
        Meteor.call('getTemps', city, function(err, results) {
     
            Session.set('temps',JSON.parse(results.content).main.temp);
        });
        return (Session.get('temps') + ' degrees ' + ' in ' + city);
    }
});

Template.layout.helpers({
    windSpeed: function() {
        var city = Session.get('city');
        Meteor.call('getWind', city, function(err, results) {
            Session.set('winds',JSON.parse(results.content).wind.speed);
        });
        return (Session.get('winds') + ' mph');
    }
});

Template.layout.events({
	'change .cities':function(evt, tmpl){
		Session.set('city', tmpl.find('.cities').value);
	}
});