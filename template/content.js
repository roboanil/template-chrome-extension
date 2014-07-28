chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
	if(request.action == "content"){
	var tol = document.getElementById(request.message).innerHTML;
	//console.log(tol);
	sendResponse(tol);
	}
});

chrome.runtime.sendMessage({action:"show"});