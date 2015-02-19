Template.layout.helpers({
    curTemp: function() {
        var city = Session.get('city');
        Meteor.call('getTemps', city, function(err, results) {
            console.log(results.content);
            Session.set('temps',JSON.parse(results.content).weather[0].description);
        });
        return (Session.get('temps') + ' in ' + city );
    }
});

Template.layout.events({
	'change .cities':function(evt, tmpl){
		Session.set('city', tmpl.find('.cities').value);
	}
});