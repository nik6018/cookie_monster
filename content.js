//////////////////////////////////////////////
//					                        //
//  Title :      Content JS 		        //
//    					                    //
//  Started by : Flux			            //
//    	                                    //
//  Time : 	 18:55 hrs	    	            //
//                                          //
//  Editor : 	 Sublime Text               //
//  	                                    //
//  Version :    0.1            	        //
//                                          //
//  Due to Quora Bullshit policy  	        //
//					                        //
//////////////////////////////////////////////

//forwards the request to the model for cookie processing
function eat_all_cookies(argument) {
	chrome.runtime.sendMessage({type: "cookie"}, function(response) {
  		if (response.message) {
  			console.log("From the backgroundjs");
  		};
	});
}
//recieves the request when user goes to quora.com
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if (request.type == "delete_cookies") {
			eat_all_cookies();
			sendResponse({message : "all_done"});
			return true;
		}

});
