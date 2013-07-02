define('router/backboneRouter',
	[],
	function(){
		var BBRouter = Backbone.Router.extend({
			initialize: function(){
				console.log('BBRouter : initialize : ');
			},
			routes: {
				"": "index",
				"#": "index",
				"home": "homePage",
				"about": "aboutPage",
				"login": "loginPage",
				"alerts": "alertsPage"
			},
			//Routing functions
			index: function(){
				console.log('BBRouter : index : ');
				this.trigger('BBRouter:index');
			},
			homePage: function(){
				console.log('BBRouter : homePage : ');
				this.trigger('BBRouter:home');
			},
			aboutPage: function(){
				console.log('BBRouter : aboutPage : ');
			},
			loginPage: function(){
				console.log('BBRouter : loginPage : ');
				this.trigger('BBRouter:login');
			},
			alertsPage: function(){
				console.log('BBRouter : alertsPage : ');
				this.trigger('BBRouter:alertsPage');	
			}

		});
		return BBRouter;
});