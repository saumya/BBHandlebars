define('service/registrationService',
	['model/vo/projectConfigVO','model/vo/userConfigVO'],
	function(projConfig,userConfig){
		
		var RegistrationService = {
			register: function(scope,uname,upw,onSuccess,onFail){
				console.log('RegistrationService : login : ');

		        var uEmail = "test@test.com";//tempFix, will come in the arguement
		        
		        //making the data object to pass to the API call
		    	var at = userConfig.getAccessToken();
		    	var di = userConfig.getDeviceId();
		    	var dt = userConfig.getDeviceType();
		    	var u = projConfig.getRegistrationURL();
		    	//logs
		    	console.log('io : registerUser : url='+u);
		    	console.log('io : registerUser : deviceId='+di);
		    	console.log('io : registerUser : deviceType='+dt);
		    	console.log('io : registerUser : userName='+uname);
		    	console.log('io : registerUser : userPassword='+upw);
		    	console.log('io : registerUser : userEmail='+uEmail);

		        //Interesting stuff going on here.
		        //event.data is set as "this" in the event handler
		        //Storing it as "that" for the closure scope
		        //var that=event.data; 
		        //finally call the login API
		        jQuery.ajax({
		            url: u,
            		type: "POST",
            		//device_id, device_type, username, password, email
            		data: {device_id:di, device_type:dt, username:uname,password:upw,email:uEmail},
            		dataType: "json",
		            success: function(result) {
		                console.log('RegistrationService : registerUser : ');
		                var rs = result.resultStatus;
		                var re = result.response;
		                console.log('RegistrationService : registerUser : success : resultStatus='+rs);
		                //
		                if(rs=='0'){
		                	var e = result.error;
		                	for(var item in e){
		                		console.log(item+' : '+e[item]);
		                	}
		                    //e has {message,status_code}
		                    if(e.status_code===411){
		                        navigator.notification.alert(messageConfig.getMsg_emailInvalid(),undefined,messageConfig.getAlertTitle());
		                    }else if(e.status_code===207){
		                        navigator.notification.alert(messageConfig.getMsg_userExists(),undefined,messageConfig.getAlertTitle());
		                    }
		                    //scope.onUserRegistrationFail();
		                    console.log('RegistrationService : login : FAIL ');
		                }else{
		                	console.log('RegistrationService : registerUser : success : response='+re);
		                    //callback is a RAW fix here, should be called on above "else" only
		                    //scope.onUserRegistrationSuccess(re);
		                    console.log('RegistrationService : login : SUCCESS ');	
		                	//scope[onSuccess](re);
		                }
		            },
		            error: function(error) {
		                //console.log('RegistrationService : login : error : error.responseText='+error.responseText);
		                //console.log('RegistrationService : login : error :error.statusCode='+error.statusCode);
		                console.log('RegistrationService : login : error :error.status='+error.status);
		                console.log('RegistrationService : login : error :error.statusText='+error.statusText);
		                //alert(error.responseText);
		                //scope.onLoginFail(error);
		                console.log('RegistrationService : registerUser : error : error.responseText='+error.responseText);

		                //scope.onFail(error);
		                //scope[onFail](error);
		            }
		        });//AJAX call complete
			}//END login
		};
		return RegistrationService;
});