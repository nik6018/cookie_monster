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


function eat_all_cookies(argument) {
	chrome.runtime.sendMessage({type: "cookie"}, function(response) {
  		if (response.c) {
  			console.log("From the backgroundjs");
  		};
	});
}

function shld_wake_up_cookie_monster(argument) {
	var url = window.location;
	if (url.host == "www.quora.com" && url.pathname !== undefined) {
		console.log("Go to the Cookie Monster");
		eat_all_cookies();
	} else{
		console.log("No need for cookie monster")
	};
}

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if (request.type == "hello") {
			eat_all_cookies();
			sendResponse({c : "f"});
			return true;
		}

});
