define('view/alertsView',
	['model/userModel','service/alertService'],
	function(UserModel,AlertService){

		var AlertsView = Backbone.View.extend({

			el: $('body'),
			events:{
				//'click #btnBack' : 'onBackClick',
				//'click #id_login' : 'onLoginClick'
			},

			renderedAlertNum:0,
			allAlertsData:'',

			initialize: function(){
				console.log('AlertsView : initialize : ');
				//make the model
				this.userModel= new UserModel();
				/*
				//compile the template and store
				this.templateString=$('#tpl_page_alert').html();//get the template
				this.compiledTeamplate=_.template(this.templateString);//compile and save to use later with data
				//for one alert
				this.tplStringOneAlert=$('#tpl_one_alert').html();
				this.tplCompiledOneAlert=_.template(this.tplStringOneAlert);
				*/
				//Handlebars
				//compile the template and store
				this.templateString=$('#hb_tpl_page_alert').html();//get the template
				this.compiledTeamplate=Handlebars.compile(this.templateString);//compile and save to use later with data
				//for one alert
				this.tplStringOneAlert=$('#hb_tpl_one_alert').html();
				this.tplCompiledOneAlert=Handlebars.compile(this.tplStringOneAlert);

				//
				this.on('AlertsView:ALERT_CREATED',this.onOneAlertCreated);
			},
			render: function(){
				console.log('AlertsView : render : ');
				var idVal="id_page_3";
		        var idTotal = ('#'+idVal);
		        //send data to the compiled template
				var v = this.compiledTeamplate({ID:idVal,data:"Page3"});
				this.$el.append(v);
				var p=$(idTotal);
				
				$.mobile.changePage(idTotal, {transition: "none"});
				
				//animate in
				TweenMax.fromTo(p, 1.5, {x:-1000},{x:0,onComplete:function(event){
					console.log('AlertsView : render : Animation completed');
					//console.log(p);
					p.trigger( "create" );
				}});

				var that = this;
				this.trigger('AlertsView:renderComplete',{view:that});
			},
			setModel: function(dataObj){
				console.log('AlertsView : setModel : ');
				console.log(dataObj);
				this.userModel= dataObj;
				//console.log($('#id_alerts'));
				//var as = new AlertService();
				//
				var at= this.userModel.get('accessToken');
				//this.userModel.set('firstName',fn);
				//this.userModel.set('lastName',ln);
				//this.userModel.set('email',e);
				var uid= this.userModel.get('userId');
				var un= this.userModel.get('userName');
				var c= this.userModel.get('categories');
				var p= this.userModel.get('publishers');

				//calling service
				var that = this;
				AlertService.getAlerts(that,'onAlertServiceSuccess','onAlertServiceFail',at,c,p);
			},
			renderAlerts: function(allAlerts){
				console.log('AlertsView : renderAlerts : ');
				this.allAlertsData = allAlerts;
				/*
				//console.log(allAlerts);
				var n=allAlerts.length;
				//
				var tplString=$('#tpl_one_alert').html();
				var tplCompiled=_.template(tplString);
				*/
				//var container = $('#id_alerts');
				/*
				var i=0;
				for(i;i<n;i++){
					//console.log(i);
					var o = allAlerts[i];
					//console.log(o);
					var view = tplCompiled(o);
					container.append(view);
					//container.trigger( "create" );
				}
				console.log('AlertsView : renderAlerts : complete');
				*/
				/*
				var o = allAlerts[0];
				this.renderNextAlert(container,tplCompiled,o);
				*/
				this.renderNextAlert();
			},
			renderNextAlert: function(){
				console.log('AlertsView : renderNextAlert : ');
				//this.renderedAlertNum
				var oneAlertData = this.allAlertsData[this.renderedAlertNum];
				var view = this.tplCompiledOneAlert(oneAlertData);
				var container = $('#id_alerts');
				//
				container.append(view);
				container.trigger( "create" );
				//notify
				this.trigger('AlertsView:ALERT_CREATED',{});
			},
			onOneAlertCreated: function(event){
				console.log('AlertsView : onOneAlertCreated : ');
				if(this.renderedAlertNum<9){
					this.renderedAlertNum++;
					this.renderNextAlert();
				}else{
					console.log('AlertsView : onOneAlertCreated : ALL RENDERED ');
				}
				
				
			},
			//callbacks : service
			onAlertServiceSuccess: function(result){
				console.log('AlertsView : onAlertServiceSuccess : ');
				//console.log(result);
				/*
				var that = this;
				this.trigger('AlertsView:getAlertsSuccess',{result:result,view:that});
				*/
				this.renderAlerts(result);
			},
			onAlertServiceFail: function(result){
				console.log('AlertsView : onAlertServiceFail : ');
				console.log(result);
			},
			//End of the view
			destroy: function(){
				console.log('AlertsView : destroy : ');
			}
		});

		return AlertsView;
});