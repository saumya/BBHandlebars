define('model/userModel',
	[],
	function(){
		var UserModel= Backbone.Model.extend({
			
			defaults: {
				"accessToken": (-1),
				"firstName": "DEFAULT FIRST NAME",
				"lastName": "DEFAULT LAST NAME",
				"email": "EMAIL",

				"userId":(-1),
				"userName":"DEFAULT USER NAME",
				//"password":"PASSWORD"
				"categories":'',//string with comma. ex: 1,4,5,6
				"publishers":''
			},
			/*
			//Does not work
			events: {
				'change': this.onChange
			},
			*/
			initialize: function(){
				console.log('UserModel : initialize : ');
				this.on('change',this.onChange);
			},
			//eventhandler
			onChange: function(){
				console.log('UserModel : onChange : ');
				//console.log('UserModel : onChanged : '+this.changed);
				//console.log(this.changed);
			},
			//
			destroy: function(){
				console.log('UserModel : destroy : ');
			}
		});
		return UserModel;
});