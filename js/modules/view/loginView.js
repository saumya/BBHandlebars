define('view/loginView',
	['model/vo/loginVO','service/loginService'],
	function(LoginVO,LoginService){

		var LoginView=Backbone.View.extend({
			el: $('body'),
			events:{
				//'click #btnBack' : 'onBackClick',
				'click #id_login' : 'onLoginClick'
			},

			initialize:function(){
				console.log('LoginView : initialize : ');
				/*
				//compile the template and store
				this.templateString=$('#tpl_page_login').html();//get the template
				this.compiledTeamplate=_.template(this.templateString);//compile and save to use later with data
				*/
				//Handlebars
				//compile the template and store
				this.templateString=$('#hb_tpl_page_login').html();//get the template
				this.compiledTeamplate=Handlebars.compile(this.templateString);//compile and save to use later with data


				/*
				//model
				this.userModel = new UserModel();
				this.userModel.on('change',this.onUserModelChange,this);
				console.log('userModel:userName='+this.userModel.get('userName'));
				console.log('userModel:userId='+this.userModel.get('userId'));
				*/
			},
			render:function(){
				console.log('LoginView : render : ');
				var idVal="id_page_2";
		        var idTotal = ('#'+idVal);
		        //send data to the compiled template
				var v = this.compiledTeamplate({ID:idVal,data:"Page2"});
				this.$el.append(v);
				var p=$(idTotal);
				
				$.mobile.changePage(idTotal, {transition: "none"});
				TweenMax.fromTo(p, 1.5, {x:-1000},{x:0});
				//this.trigger('LoginView:CreationComplete',this);
				
			},
			onLoginClick: function(){
				console.log('LoginView : onLoginClick : ');
				//change url
				//$.mobile.navigate( "#login" );
				//$.mobile.navigate( "" );
				var u = $("#uName").val();
				var p = $("#uPassword").val();
				
				//console.log('user='+u+" : password="+p);
				/*
				var um = new UserModel();
				um.set('userId',u);
				um.set('password',p);
				*/
				//var vo=new LoginVO();
				LoginVO.userID=u;
				LoginVO.password=p;
				//console.log('userModel:userId='+um.get('userId'));
				
				//this.trigger('LoginView:onLoginClick',um);
				//this.trigger('LoginView:onLoginClick',LoginVO);//moved to success callback
				var that = this;
				//test drive of the service
				LoginService.login(that,u,p,'onLoginSuccess','onLoginFail');
			},
			//callback
			onLoginSuccess: function(result){
				console.log('LoginView : onLoginSuccess : ');
				//console.log(result);
				//this.test();
				var that = this;
				this.trigger('LoginView:loginSuccess',{result:result,view:that});
			},
			onLoginFail: function(result){
				console.log('LoginView : onLoginFail : ');
				console.log(result);
				//this.test();
			},
			test: function(){
				console.log('LoginView : test : JUST TO TEST THE SCOPE.');
			},
			//event handlers
			onUserModelChange:function(){
				console.log('LoginView : onUserModelChange : ');
			},
			//
			destroy:function(){
				console.log('LoginView : destroy : ');
				var idVal="id_page_2";
		        var idTotal = ('#'+idVal);
		        var p=$(idTotal);
		        //
		        var that = this;
		        TweenMax.fromTo(p, 1.5, {x:0},{x:-1000,onComplete:function(event){
		        	console.log('LoginView : destroy : Animation completed');
		        	that.trigger('LoginView:Destroy',that);
		        	p.remove();
		        }});
		        //this.$el.remove(p);
		        //p.remove();
			}
		});

		return LoginView;
});