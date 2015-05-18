Template.addSpecialties.events({
	'click .addSpecialty': function(event, template){
		Countries.update(this._id, {$push: {specialties: template.find("select").value}})
	}
});

Template.specialty.events({
	'click .deleteSpecialty': function(event, template){
		Countries.update(Template.parentData()._id, {$pull: {specialties: this._id}})
	}
})

Template.CountryDetail.events({
	'dblclick .countryName': function(event, template){
		var newName = prompt(translate("Enter new country name"), this.name);

		console.log(newName)

		if (newName != null) {
			Countries.update(this._id, {$set: {name: newName}});
			Router.go('/country/' + newName)
		}

	}
})