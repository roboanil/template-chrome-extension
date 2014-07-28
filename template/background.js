var temp = "";
var contentChange = function(contentid){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id,{message:contentid,action:"content"},function(response){
		console.log(response);
		temp = response;
		var popups = chrome.extension.getViews({type: "popup"});
		if (popups.length != 0) {
			var popup = popups[0];
			var str = tabs[0].url;    
			var arr = str.split('/');
			var strFile = arr[arr.length-1];
			popup.document.getElementById("filename").value = strFile;
			
			popup.document.getElementById("tabs").style.display = 'block';
			popup.document.getElementById("fez").innerHTML = response;
		}
		});
	});
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
	if(request.action == "show"){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.pageAction.show(tabs[0].id);
		});
	}else if(request.action == "option"){
		
	}else if(request.action == "popup"){
		sendResponse(temp);
	}
});