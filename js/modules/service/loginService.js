define('service/loginService',
	['model/vo/projectConfigVO','model/vo/userConfigVO'],
	function(projConfig,userConfig){
		
		var LoginService = {
			login: function(scope,uname,upw,onSuccess,onFail){
				console.log('LoginService : login : ');
				 //get the device date, which should be stored before in the userConfig Object
		        var device_id_1=userConfig.getDeviceId();
		        var device_type_1=userConfig.getDeviceType();
		        //gets the user input
		        //var username_1 = $('#id_uName').val();
		        //var password_1 = $('#id_uPWord').val();
		        /*
		        var username_1 = uname;
		        var password_1 = upw;
		        */
		        var username_1 = uname;
		        var password_1 = md5(upw);//uses md5() external lib
		        console.log('io : login : md5 : password='+password_1);
		        
		        console.log('LoginService : login : username_1='+uname);
		        console.log('LoginService : login : password_1='+upw);
		        console.log('LoginService : login : MD5 : password_1='+password_1);
		        console.log('LoginService : login : device_id_1='+device_id_1);
		        console.log('LoginService : login : device_type_1='+device_type_1);
		        console.log('LoginService : login : login url='+projConfig.getLoginURL());

		        //Interesting stuff going on here.
		        //event.data is set as "this" in the event handler
		        //Storing it as "that" for the closure scope
		        //var that=event.data; 
		        //finally call the login API
		        jQuery.ajax({
		            url: projConfig.getLoginURL(),
		            type: "POST",
		            //data: {member: memberText, auth_provider : auth_providerText, auth_id : auth_idText, name : nameText, access_token: access_tokenText, type : typeText, gender : genderText},
		            data: {device_id:device_id_1,device_type:device_type_1,username:username_1,password:password_1},
		            dataType: "json",
		            beforeSend: function(xhr) {
		                //HERE to refere, incase we need to do something before sending
		                /*
		                if (xhr && xhr.overrideMimeType) {
		                    xhr.overrideMimeType("application/j-son;charset=UTF-8");
		                }
		                //alert("beforeEnd ends");
		                */
		            },
		            success: function(result) {
		                //alert(result.length);
		                var rs = result.resultStatus;
		                var re = result.response;
		                console.log('LoginService : login : success : resultStatus='+rs);
		                /*
		                console.log('LoginService : login : success : access token='+re.accessToken);
		                console.log('LoginService : login : success : publishers='+re.userInformation.MyPublishers);
		                console.log('LoginService : login : success : categories='+re.userInformation.MyCategories);
		                */
		                //scope.onLoginSuccess(result);
		                
		                //scope.onSuccess(result);
		                //scope[onSuccess](result);//working
		                //check for the status
		                if(rs===1){
		                	console.log('LoginService : login : SUCCESS ');	
		                	scope[onSuccess](re);
		                }else{
		                	console.log('LoginService : login : FAIL ');	
		                }
		            },
		            error: function(error) {
		                //console.log('LoginService : login : error : error.responseText='+error.responseText);
		                //console.log('LoginService : login : error :error.statusCode='+error.statusCode);
		                console.log('LoginService : login : error :error.status='+error.status);
		                console.log('LoginService : login : error :error.statusText='+error.statusText);
		                //alert(error.responseText);
		                //scope.onLoginFail(error);
		                
		                //scope.onFail(error);
		                scope[onFail](error);
		            }
		        });//AJAX call complete
			}//END login
		};
		return LoginService;
});