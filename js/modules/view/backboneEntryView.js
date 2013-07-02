define('view/backboneEntryView',
	[],
	function(){
		//get the template
		
		var BBApplicationView = Backbone.View.extend({

			//el: $('#idSlides'),
			el: $('body'),
			//el: $('#id_appContainer'),
			events:{
				//'click #btnBack' : 'onBackClick',
				'click #id_ok' : 'onOkClick'
			},

			initialize: function(){
				console.log('BBApplicationView : initialize : ');
				/*
				//compile the template and store
				this.templateString=$('#tpl_page_general').html();//get the template
				this.compiledTeamplate=_.template(this.templateString);//compile and save to use later with data
				*/
				//updated to Handlebars
				this.templateString=$('#hb_tpl_page_general').html();//get the template
				this.compiledTeamplate=Handlebars.compile(this.templateString);
			},
			render: function(){
				console.log('BBApplicationView : render : ');
		        //$.mobile.navigate( "#bar" ); // change the URL
		        //$.mobile.changePage( "#one");// chagne the jquery mobile page
		        var idVal="id_page_1";
		        var idTotal = ('#'+idVal);
				//send data to the compiled template
				var v = this.compiledTeamplate({ID:idVal,data:"BackboneJS"});
				//render the compiled template with data
				this.$el.append(v);
				var p=$(idTotal);

				$.mobile.changePage(idTotal, {transition: "none"});
				TweenMax.fromTo(p, 1.5, {x:-1000},{x:0});
				this.trigger('BBApplicationView:CreationComplete',this);//dispatching an event with arguements passed
				
			},
			testLog:function(){
				console.log('BBApplicationView : testLog : ');
			},
			//Event handlers
			onOkClick: function(){
				console.log('BBApplicationView : onOkClick : ');
				//change url
				//$.mobile.navigate( "#login" );
				$.mobile.navigate( "#home" );
			},
			//finally
			destroy: function(){
				console.log('BBApplicationView : destroy : ');
				var idVal="id_page_1";
		        var idTotal = ('#'+idVal);
		        var p=$(idTotal);
		        //
		        var that = this;
		        TweenMax.fromTo(p, 1.5, {x:0},{x:-1000,onComplete:function(event){
		        	console.log('BBApplicationView : destroy : Animation completed');
		        	that.trigger('BBApplicationView:AnimationOutComplete',that);
		        	p.remove();
		        }});
			}
		});
		return BBApplicationView;

});