define('service/alertService',
	['model/vo/projectConfigVO','model/vo/userConfigVO'],
	function(projConfig,userConfig){
		
		var AlertService = {
			getAlerts: function(scope,onSuccess,onFail,accessToken,categories,publishers){
				console.log('AlertService : getAlerts : ');
				//making the data object to pass to the API call
		    	//var at = parseInt(accessToken);
		    	var at = accessToken;
		    	var di=userConfig.getDeviceId();
		        var dt=userConfig.getDeviceType();
		    	var af = '';//alerts from : UTC time stamp
		    	var n = 10;//counts : number of alerts in a page
		    	var s = 0;//offset index
		    	var c = categories;
		    	var p = publishers;

		    	var urlS = projConfig.getAlertsURL();//url String
		    	
		    	console.log('AlertService : getAlerts : categories='+c);
		    	console.log('AlertService : getAlerts : publishers='+p);
		    	console.log('AlertService : getAlerts : url='+urlS);
		    	console.log('AlertService : getAlerts : deviceId='+di);
		    	console.log('AlertService : getAlerts : deviceType='+dt);
		    	console.log('AlertService : getAlerts : accessToken='+at);
		    	console.log('AlertService : getAlerts : alerts from='+af);
		    	console.log('AlertService : getAlerts : start index='+s);
		    	console.log('AlertService : getAlerts : count='+n);
		    	
		        //finally call the getAlerts API
		        jQuery.ajax({
		            url: urlS,
		            type: "POST",
		            //access_token, device_id, device_type, alerts_from, count(int), start(int), publishers, categories
		            data: {access_token:at, device_id:di, device_type:dt,alerts_from:af,count:n,start:s,publishers:p,categories:c},
		            dataType: "json",
		            success: function(result) {
		                //alert(result.length);
		                var rs = result.resultStatus;
		                var re = result.response;
		                console.log('AlertService : getAlerts : success : resultStatus='+rs);
		                console.log(result);
		               
		                //check for the status
		                if(rs===1){
		                	console.log('AlertService : getAlerts : SUCCESS ');	
		                	//
		                	scope[onSuccess](re);
		                }else{
		                	console.log('AlertService : getAlerts : FAIL ');	
		                	//console.log('AlertService : getAlerts : FAIL '+rs.error);	
		                	console.log('AlertService : getAlerts : FAIL : message='+result.error.message);	
		                	console.log('AlertService : getAlerts : FAIL : status_code='+result.error.status_code);	
		                }
		            },
		            error: function(error) {
		            	console.log('AlertService : getAlerts : ERROR : error.status='+error.status);
		                console.log('AlertService : getAlerts : ERROR : error.statusText='+error.statusText);
		                //
		                scope[onFail](error);
		            }
		        });//AJAX call complete
			}//END login
		};
		return AlertService;
});