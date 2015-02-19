Meteor.methods({
	'getTemps':function(city){
		return Meteor.http.call('GET', 'http://api.openweathermap.org/data/2.5/weather?q=' + city );
	}
});