define('model/vo/projectConfigVO',
	[],
	function(){
		var ProjectConfigVO = {
			isInitialized: false,
			alertFadeInAnimationTime:500,//1sec=1,000
			h:'http://',
			//b_url:'192.168.1.251/kolboalert/apis/index.php/v1/',

			b_url:'www.kolboalert.com/apis/index.php/v1/',
			//b_url:'115.112.64.38:8080/kolboalert/apis',
			//messages
			//loginFailMessage:'Opps! Something went wrong on ourside. Please comeback again after sometime, to login. Thanks.',
			//192.168.1.35/ = sanjeev's machine
			//login_url:'http://192.168.1.251/kolboalert/apis/index.php/v1/user/login',
			initialize: function(){
				console.log('projConfig : initialize : ');
				this.isInitialized=true;
			},
			//Getter and setter
			getAlertFadeInAnimationTime:function(){
				return this.alertFadeInAnimationTime;
			},
			//Service settings
			getUserInfoURL:function(){
				var lu = this.h+this.b_url+'user/information';
				return lu;
			},
			getLoginURL:function(){
				var lu = this.h+this.b_url+'user/login';
				return lu;
			},
			getLogoutURL:function(){
				var lo = this.h+this.b_url+'user/logout';
				return lo;
			},
			getAlertsURL:function(){
				var a = this.h+this.b_url+'alerts';
				return a;
			},
			getRemoveAlertURL:function(){
				var a = this.h+this.b_url+'alerts/removealert';
				return a;
			},
			getMyCategoriesURL:function(){
				var a = this.h+this.b_url+'categories';
				return a;
			},
			getMyPublishersURL:function(){
				var a = this.h+this.b_url+'publishers';
				return a;
			},
			getAllCategoriesURL:function(){
				var a = this.h+this.b_url+'categories/all';
				return a;
			},
			getAllPublishersURL:function(){
				var a = this.h+this.b_url+'publishers/all';
				return a;
			},
			getSetPublishersURL:function(){
				var a = this.h+this.b_url+'publishers?method=update';
				return a;
			},
			getSetCategoriesURL:function(){
				var a = this.h+this.b_url+'categories?method=update';
				return a;
			},
			getEmailAlertURL:function(){
				var a = this.h+this.b_url+'alerts/emailalert';
				return a;
			},
			getRegistrationURL:function(){
				var a = this.h+this.b_url+'user/registration';
				return a;
			},
			getUpdateProfileURL:function(){
				var a = this.h+this.b_url+'user/profile';
				return a;
			},
			getUpdatePasswordURL:function(){
				var a = this.h+this.b_url+'user/changepassword';
				return a;
			}
		};
		return ProjectConfigVO;
});