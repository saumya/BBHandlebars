define('controller/backboneController',
	['router/backboneRouter','model/userModel','view/backboneEntryView','view/homeView'],
	function(BBRouter,UserModel,BBEntryView,BBHomeView){
	var BBApplicationController = Backbone.View.extend({
		activeView:'',
		previousView:'',
		initialize: function(){
			console.log('BBApplicationController : initialize : ');
			this.userModel= new UserModel();
			//this.userModel.on('change',this.onUserModelChange,this);//just a check to test whether it works

			
		},
		render: function(){
			console.log('BBApplicationController : render : ');
			//dispatch the creation complete event
			this.trigger('BBAppController:onCreationComplete');
		},
		initForApplication: function(){
			console.log('BBApplicationController : initForApplication : ');
			var router= new BBRouter();
			router.on('BBRouter:index',this.onIndex,this);
			//router.on('BBRouter:login',this.onLogin,this);
			//router.on('BBRouter:alertsPage',this.onAlertsPage,this);
			router.on('BBRouter:home',this.onHomePage,this);
			//finally enable the Router
			Backbone.history.start();
		},
		//EventHandlers
		onIndex: function(event){
			console.log('BBApplicationController : onIndex : ');
			/*
			if(this.activeView){
				this.activeView.destroy();
			}
			*/

			var bb = new BBEntryView();
			bb.on('BBApplicationView:CreationComplete',this.onApplicationEntryCreation,this);
			bb.on('BBApplicationView:AnimationOutComplete',this.onApplicationEntryDestroy,this);
			bb.render();
		},
		onHomePage: function(){
			console.log('BBApplicationController : onHomePage : ');
			if(this.activeView){
				this.activeView.destroy();
			}
			
		},
		onLogin: function(event){
			console.log('BBApplicationController : onLogin : ');
			//this.activeView.testLog();
			this.activeView.destroy();
			
		},
		//onLoginClick:function(userModelRef){
		onLoginSuccess:function(eventObj){
			console.log('BBApplicationController : onLoginSuccess : ');
			var dataOBJ = eventObj.result;
			var view = eventObj.view;
			this.activeView = view;
			//
			console.log(dataOBJ.result);
			var at= dataOBJ.accessToken;
			// gets an Object
			var ui= dataOBJ.userInformation; 
			//gets data from the object
			var e= ui.EmailAdd;
			var fn= ui.FirstName;
			var ln= ui.LastName;
			var c= ui.MyCategories;
			var p= ui.MyPublishers;
			var ph= ui.Phone;
			var uid= ui.UserId;
			var un= ui.UserName;
			//set the Model
			this.userModel.set('accessToken',at);
			this.userModel.set('firstName',fn);
			this.userModel.set('lastName',ln);
			this.userModel.set('email',e);
			this.userModel.set('userId',uid);
			this.userModel.set('userName',un);
			this.userModel.set('categories',c);
			this.userModel.set('publishers',p);

			console.log('BBApplicationController : onLoginSuccess : accessToken='+at);
			//console.log(this.userModel);
			//view.destroy();
			$.mobile.navigate( "#alerts" );
		},
		onApplicationEntryCreation: function(dispatcher){
			console.log('BBApplicationController : onApplicationEntryCreation : ');
			this.activeView=dispatcher;
			//dispatcher.testLog();
			//bb.testLog();
			//TweenMax.fromTo(dispatcher, 2.5, {x:-1000},{x:0});
		},
		onApplicationEntryDestroy: function(dispatcher){
			console.log('BBApplicationController : onApplicationEntryDestroy : ');
			//dispatcher.testLog();
			/*
			//render new view
			var bb1 = new BBLoginView();
			//bb1.on('LoginView:onLoginClick',this.onLoginClick,this);
			bb1.on('LoginView:loginSuccess',this.onLoginSuccess,this);
			bb1.on('LoginView:Destroy',this.onLoginDestroy,this);
			bb1.render();
			*/
			//render home view
			var bb1 = new BBHomeView();
			bb1.on('HomeView:renderComplete',this.onHomeViewRenderComplete,this);
			bb1.on('HomeView:Destroy',this.onHomeViewDestroy,this);
			bb1.render();

		},
		onHomeViewRenderComplete: function(dispatcher){
			console.log('BBApplicationController : onHomeViewRenderComplete : ');
			this.activeView=dispatcher;//BBHomeView
		},
		onHomeViewDestroy: function(){
			console.log('BBApplicationController : onHomeViewDestroy : ');
			/*
			//change url
			$.mobile.navigate( "#alerts" );
			//works here, but not if we move it to the route event
			var aV = new AlertsView();
			aV.render();
			*/
			/*
			var aV = new AlertsView();
			aV.on('AlertsView:renderComplete',this.onAlertsRenderComplete,this);
			aV.render();
			*/
		},

		//model event handlers
		onUserModelChange:function(dispatcher){
			console.log('BBApplicationController : onUserModelChange : ');
		},
		//
		destroy: function(){
			console.log('BBApplicationController : destroy : ');
		}
	});
	return BBApplicationController;
});