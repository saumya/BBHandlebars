define('model/vo/loginVO',
	[],
	function(){
		var LoginVO = (function(){
			var userID='';
			var password=''
			return {userID:userID,password:password};
		}());
		return LoginVO;
});