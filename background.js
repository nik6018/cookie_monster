//////////////////////////////////////////////
//											//
//  Title :      Background JS 		        //
//    										//
//  Started by : Flux						//
//    										//
//  Time : 		 18:55 hrs					//
//                                          //
//  Editor : 	 Sublime Text               //
//  	                                    //
//	Version :    0.1            			//
//                                          //
//  Due to Quora Bullshit policy  			//
//											//
//////////////////////////////////////////////

//To see any output on the backgroundpage click on the "Inspect view : background page" 
//console = chrome.extension.getBackgroundPage().console; <= dont use this

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if (request.type == "cookie") {
			    chrome.cookies.getAll({domain : ".quora.com"}, function(cookies) {
				for (var i in cookies) {
			      removeCookie(cookies[i]);
			    }
		    });
			sendResponse({message : true});
		    return true;
		};
  
});

function removeCookie(cookie) {
  var url = "http" + (cookie.secure ? "s" : "") + "://" + cookie.domain + cookie.path;
  chrome.cookies.remove({
    "url": url,
    "name": cookie.name
  });
}
