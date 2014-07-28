/*
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action == "option"){
		document.getElementById("opt").innerHTML = 'block';
	  }
  });
*/
chrome.runtime.sendMessage({action:"option"});
document.addEventListener('DOMContentLoaded', function () {
	//localStorage["mysetting"] = '';
	//localStorage.removeItem("mysetting");
	//document.getElementById("opt").innerHTML = localStorage["mysetting"];
});