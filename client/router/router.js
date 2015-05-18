Router.configure({
	loadingTemplate: 'loading'
})

Router.route('/', function () {
  this.render('Countries', {
  	data: function(){return Countries.find()}
  });
});

Router.route('/country/:name', function(){
	this.render('CountryDetail', {
		data: function (){
			return Countries.findOne({name: this.params.name})
		}
	})
});
   