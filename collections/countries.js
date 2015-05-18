Countries = new Mongo.Collection('countries', {
	transform: function (country){
		country.specialtiesCursor = Specialties.find({_id: {$in: country.specialties}});
		return country;
	}
})