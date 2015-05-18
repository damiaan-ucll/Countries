Template.addSpecialties.helpers({
	newSpecialties: function(){
		if(this.specialties)
			return Specialties.find({_id: {$nin: this.specialties}})
	}
})