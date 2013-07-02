define('view/homeView',
	[],
	function(){

		var HomeView = Backbone.View.extend({

			el: $('body'),
			events:{
				'click #id_form_1' : 'onForm1Click',
				'click #id_form_2' : 'onForm2Click',
				'click #id_form_3' : 'onForm3Click'
			},
			initialize: function(){
				console.log('HomeView : initialize : ');
				//page template
				this.tplString=$('#hb_tpl_page_home').html();
				this.tplCompiled=Handlebars.compile(this.tplString);
				//content template
				this.tplContentString=$('#hb_tpl_pageContent').html();
				this.tplCompiledContent=Handlebars.compile(this.tplContentString);
			},
			render: function(){
				console.log('HomeView : render : ');
				var idVal="id_page_3";
		        var idTotal = ('#'+idVal);
		        //send data to the compiled template
				var v = this.tplCompiled({ID:idVal,data:"Page3",name:"Three Forms",description:"Defines the rules."});
				this.$el.append(v);
				var p=$(idTotal);

				
				$.mobile.changePage(idTotal, {transition: "none"});
				
				var that = this;
				//animate in
				TweenMax.fromTo(p, 1.5, {x:-1000},{x:0,onComplete:function(event){
					console.log('HomeView : render : Animation completed');
					//console.log(p);
					p.trigger( "create" );
					//
					that.trigger('HomeView:renderComplete',that);
				}});
			},

			//event handlers
			onForm1Click: function(event){
				console.log('HomeView : onForm1Click : ');
				//clear
				$("#id_page_content").html("");
				//make data
				var o = {image:"img/form1.jpg",name:"one",height:"100",numWheels:"30",color:"red"};
				//render
				var c = this.tplCompiledContent(o);
				$("#id_page_content").append(c);

			},
			onForm2Click: function(event){
				console.log('HomeView : onForm2Click : ');
				//clear
				$("#id_page_content").html("");
				//make data
				var o = {image:"img/form2.jpg",name:"two",height:"100",numWheels:"30",color:"red"};
				//render
				var c = this.tplCompiledContent(o);
				$("#id_page_content").append(c);
			},
			onForm3Click: function(event){
				console.log('HomeView : onForm3Click : ');
				//clear
				$("#id_page_content").html("");
				//make data
				var o = {image:"img/form3.jpg",name:"three",height:"100",numWheels:"30",color:"red"};
				//render
				var c = this.tplCompiledContent(o);
				$("#id_page_content").append(c);
			},

			//End of the view
			destroy: function(){
				console.log('HomeView : destroy : ');
			}
		});

		return HomeView;
});