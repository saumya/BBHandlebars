define('model/vo/userConfigVO',
	[],
	function(){
		var UserConfigVO= {
			isInitialized: false,
			user_deviceType:"nothing",
			user_deviceId:"nothing",
			user_accessToken:(-1),
			//user info
			userID:'nothing',
			firstName:'nothing',
			lastName:'nathing',
			emailId:'nothing',
			userName:'nothing',
			//
			user_publisherIDs_onLogin:'nothing',
			user_categoryIDs_onLogin:'nothing',
			all_my_allerts:{},
			all_publishers:{},
			all_categories:{},
			
			//user settings
			updateIntervalTime : 60000,//per minute 1minute=60,000 1sec=1,000.
			//Methods
			initialize: function(){
				console.log('UserConfigVO : initialize : ');
				this.isInitialized=true;
			},
			//getter and setters
			setDeviceType:function(device_type){
				this.user_deviceType=device_type;
			},
			getDeviceType:function(){
				return this.user_deviceType;
			},
			setDeviceId:function(device_id){
				this.user_deviceId=device_id;
			},
			getDeviceId:function(device_id){
				return this.user_deviceId;
			},
			setAccessToken:function(tokenValue){
				this.user_accessToken=tokenValue;
			},
			getAccessToken:function(){
				if(this.user_accessToken===(-1)){
					console.log('userConfig : getAccessToken : Access Token is not yet set');
				}
				return this.user_accessToken;
			},
			//all publishers and categories
			setCategories:function(allCategories){
				this.all_categories=allCategories;
			},
			getCategories:function(){
				return this.all_categories;
			},
			setPublishers:function(allPublishers){
				this.all_publishers=allPublishers;
			},
			getPublishers:function(){
				return this.all_publishers;
			},
			//setting the data which it got on login
			setMyPublisherIDsOnLogin: function(allIDs){
				this.user_publisherIDs_onLogin=allIDs;
			},
			getMyPublisherIDsOnLogin: function(){
				return this.user_publisherIDs_onLogin;
			},
			setMyCategoryIDsOnLogin: function(allIDs){
				this.user_categoryIDs_onLogin=allIDs;
			},
			getMyCategoryIDsOnLogin: function(){
				return this.user_categoryIDs_onLogin;
			},
			setAllMyAllerts: function(alerts){
				this.all_my_allerts=alerts;
			},
			getAllMyAllerts: function(){
				return this.all_my_allerts;
			},
			//
			setUserId:function(uid){
				this.userID=uid;
			},
			getUserId:function(){
				return this.userID;
			},
			setFirstName: function(fname){
				this.firstName=fname;
			},
			getFirstName: function(){
				return this.firstName;
			},
			setLastName: function(lname){
				this.lastName=lname;
			},
			getLastName: function(){
				return this.lastName;
			},
			setEmailId:function(emailAddress){
				this.emailId=emailAddress;
			},
			getEmailId:function(){
				return this.emailId;
			},
			setUserName:function(nameString){
				this.userName=nameString;
			},
			getUserName:function(){
				return this.userName;
			},
			
			//Settings
			getMyUpdateInterval: function(){
				return this.updateIntervalTime;
			},
			//utility get methods
			getFullName:function(){
				var f=this.firstName;
				var l=this.lastName;
				var fn= f+' '+l;
				return fn;
			}
		};
		return UserConfigVO;
});