define('model/vo/messageConfigVO',
	[],
	function(){
		
		var MessageConfigVO = (function(){
		var isInitialized,initialize;
		var getAlertTitle,getAlertTitleSuccess;
		var getMsgLoginFail,getMsgLoginFailForAuth,getLengthValidationFail;
		var getMsgNumPublisher,getMsgNumCategory;
		//messages
		var alertTitle = 'Error';
		var alertTitleSuccess = 'Success';

		var loginFail='Technical Error. Please comeback again to login. Thanks.';
		var loginFailAuthentication='Incorrect User ID or Password.';
		var lengthIsNotValid='This should be between 6 and 20 characters.';
		var lengthIsNotValid2='This should be between 1 and 50 characters.';
		var emptyString='Can not be Empty!';
		var twoAreNotSame='The two words are not same.';
		var twoPwAreNotSame='The two passwords typed, are not same.';
		var minCategories = 'At least one Category must be selected.';
		var minPublishers = 'At least one Publisher must be selected.';
		
		
		//initialising function
		initialize = function(){
			isInitialized = true;
		};
		getWhetherInitialised = function(){
			return isInitialized;
		};
		
		//implementation of getters
		getAlertTitle = function(){
			return alertTitle;
		};
		getAlertTitleSuccess = function(){
			return alertTitleSuccess;
		};
		getMsgLoginFail = function (){
			return loginFail;
		};
		getMsgLoginFailForAuth = function(){
			return loginFailAuthentication;
		};
		getLengthValidationFail = function(){
			return lengthIsNotValid;
		};
		getLengthValidationFail2 = function(){
			return lengthIsNotValid2;
		};
		getTwoAreNotSame = function(){
			return twoAreNotSame;
		};
		getTwoPasswordsNotSame = function(){
			return twoPwAreNotSame;
		};
		getEmptyStringMessage = function(){
			return emptyString;
		};
		getMsgNumPublisher = function(){
			return minPublishers;
		};
		getMsgNumCategory = function(){
			return minCategories;
		};
		//expose
		return {
			initialize:initialize,
			getWhetherInitialised:getWhetherInitialised,
			getAlertTitle:getAlertTitle,
			getAlertTitleSuccess: getAlertTitleSuccess,
			getMsgLoginFail:getMsgLoginFail,
			getMsgLoginFailForAuth:getMsgLoginFailForAuth,
			getLengthValidationFail:getLengthValidationFail,
			getLengthValidationFail2:getLengthValidationFail2,
			getTwoAreNotSame:getTwoAreNotSame,
			getTwoPasswordsNotSame:getTwoPasswordsNotSame,
			getEmptyStringMessage:getEmptyStringMessage,
			getMsgNumPublisher:getMsgNumPublisher,
			getMsgNumCategory:getMsgNumCategory
		};

	}());
	return MessageConfigVO;
});