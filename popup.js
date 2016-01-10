//////////////////////////////////////////////
//											//
//  Title :      PopUP JS 		        	//
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


document.getElementById("act").addEventListener("click", function (argument) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  		chrome.tabs.sendMessage(tabs[0].id, {type: "delete_cookies"}, function(response) {
            if(response.message){
                chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                    chrome.tabs.update(tabs[0].id, {url: tabs[0].url});
                    console.log(response.message);
                    window.close();
                });
            }
  		});
	});
});
