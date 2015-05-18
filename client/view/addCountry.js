Template.addCountry.events({
	'submit' : function (event, template){
		event.preventDefault();

		Countries.insert(
			{
				name: template.find(".addCountryName").value, 
				specialties: []
			}
		);
	}
})