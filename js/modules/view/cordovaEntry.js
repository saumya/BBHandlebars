//jQuerymobile is loaded here.
//That is to make sure that the default configuration is already done.
define('view/cordovaEntry',
	['jquerymobile','controller/backboneController'],
	function(localJqueryMobile,BBController){
		/*
		//just a test
		console.log('CordovaEntryView : localJqueryMobile : start');
		console.log(localJqueryMobile);
		console.log('CordovaEntryView : localJqueryMobile : end');
		*/
		var CordovaEntryView = {
		    // Application Constructor
		    initialize: function() {
		    	console.log('CordovaEntryView : initialize : ');
		    	/*
		    	//This is how we are going to route through our application
		        $.mobile.navigate( "#bar" ); // change the URL
		        $.mobile.changePage( "#two");// chagne the jquery mobile page
		        */
		        /*
		        //HACK
		        //Make a newly created page visible
		        $(document).on('pageinit',function(event){
					console.log('CordovaEntryView : Page : pageinit : ###########');
					$(event.target).addClass('ui-page-active');
					event.preventDefault();
					return false;
				});*/
		        //
		        //Backbone
		        //var bbRouter= new BBRouter();
		        //var bbController= new BBController();
		        
		        this.bbController= new BBController();
		        this.bbController.on('BBAppController:onCreationComplete',this.onControllerCreationComplete,this);
		        this.bbController.render();//HACK : common this is a Backbone View, thats why calling render()

		        //this.bindEvents();
		    },
		    onControllerCreationComplete: function(){
		    	console.log('CordovaEntryView : onControllerCreationComplete : ');
		    	this.bbController.initForApplication();
		    },



		    // Bind Event Listeners
		    //
		    // Bind any events that are required on startup. Common events are:
		    // 'load', 'deviceready', 'offline', and 'online'.
		    bindEvents: function() {
		    	console.log('CordovaEntryView : bindEvents : ');
		        document.addEventListener('deviceready', this.onDeviceReady, false);
		    },
		    // deviceready Event Handler
		    //
		    // The scope of 'this' is the event. In order to call the 'receivedEvent'
		    // function, we must explicity call 'app.receivedEvent(...);'
		    onDeviceReady: function() {
		    	console.log('CordovaEntryView : deviceready : ');
		        app.receivedEvent('deviceready');
		    },
		    // Update DOM on a Received Event
		    receivedEvent: function(id) {
		    	console.log('CordovaEntryView : receivedEvent : ');
		        var parentElement = document.getElementById(id);
		        var listeningElement = parentElement.querySelector('.listening');
		        var receivedElement = parentElement.querySelector('.received');

		        listeningElement.setAttribute('style', 'display:none;');
		        receivedElement.setAttribute('style', 'display:block;');

		        console.log('Received Event: ' + id);
		        
		    }
		};
		return CordovaEntryView;
});