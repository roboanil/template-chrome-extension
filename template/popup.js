
document.addEventListener('DOMContentLoaded', function () {
	//$("#homePage").hide();
	//var trinity = "";
	$("#homeT").click(function() {
		$("#homeT").prop("style").backgroundColor = "cadetblue";
		$("#catT").prop("style").backgroundColor = "";
		$("#articleT").prop("style").backgroundColor = "";
		$("#homeP").prop("style").display = "block";
		$("#catP").hide();
		$("#articleP").hide();
		$("#fileOptions").show();
	});
				
	$("#catT").click(function() {
		$("#homeP").hide();
		$("#articleT").prop("style").backgroundColor = "";
		$("#homeT").prop("style").backgroundColor = "";
		$("#catT").prop("style").backgroundColor = "cadetblue";
		$("#catP").prop("style").display = "block";
		$("#articleP").hide();
		$("#fileOptions").show();
	});
	
	$("#articleT").click(function() {
		$("#homeP").hide();
		$("#catP").hide();
		$("#homeT").prop("style").backgroundColor = "";
		$("#catT").prop("style").backgroundColor = "";
		$("#articleT").prop("style").backgroundColor = "cadetblue";
		$("#articleP").prop("style").display = "block";
		$("#fileOptions").show();
	});
	
	var clickElement = document.querySelector("#createT");
	clickElement.addEventListener('click',function(){
		var temp = $("#contentT").val();
		if(temp.length > 2){
			$("#error").hide();
			var bg = chrome.extension.getBackgroundPage();
			bg.contentChange(temp);
			$("#searchC").hide();	
			
			// chrome.runtime.sendMessage({action: "popup"},function(response) {
				// trinity = response;
			// });
			
		}else{
		$("#error").html("Enter content id").show();
						setTimeout(function() {
							$("#error").hide();
						}, 1500);
		}
	});
	
	//var saveElement = document.querySelector("#saveBut");
	//saveElement.addEventListener('click',function(){
	$("#saveBut").click(function() {
		if($("#articleP").prop("style").display == "block"){
			var conte = document.getElementById('databox5').value;
			var title = document.getElementById('filename').value;
			var str = title;    
			var arr = str.split('/');
			var strFile = arr[arr.length-1];
			//alert(strFile );
			var blob = new Blob([conte], {type: "text/plain;charset=utf-8"});
			saveAs(blob, strFile);	
		}else if($("#homeP").prop("style").display == "block"){
			var conte = document.getElementById('databox1').value;
			var blob = new Blob([conte], {type: "text/plain;charset=utf-8"});
			saveAs(blob, "home.html");
		}else if($("#catP").prop("style").display == "block"){
			var conte = document.getElementById('databox3').value;
			var blob = new Blob([conte], {type: "text/plain;charset=utf-8"});
			saveAs(blob, "home.html");
		}
	});
	
	//var viewElement = document.querySelector("#viewBut");
	//viewElement.addEventListener('click',function(){
	$("#viewBut").click(function() {
		if($("#homeP").prop("style").display == "block"){
			var conte = document.getElementById('databox1').value;
			document.getElementById('databox2').innerHTML = conte;
		}else if($("#catP").prop("style").display == "block"){
			var conte = document.getElementById('databox3').value;
			document.getElementById('databox4').innerHTML = conte;
		}else if($("#articleP").prop("style").display == "block"){
			var conte = document.getElementById('databox5').value;
			document.getElementById('databox6').innerHTML = conte;
		}
	});
	
	//document.querySelector('.readBytesButtons').addEventListener('click', function(evt) {
	$(".readBytesButtons").click(function(){
		var type = 0;
		if($("#homeP").prop("style").display == "block"){
			type = 1;
			console.log(type + "home");
		}else if($("#catP").prop("style").display == "block"){
			type = 2;
			console.log(type + "cate");
		}else if($("#articleP").prop("style").display == "block"){
			type = 3;
			console.log(type + "article");
		}
		readBlob(null, null, type);
		
	});
		
	//document.querySelector('.addContent').addEventListener('click', function(evt) {
	$(".addContent").click(function() {
		console.log("click");
		//chrome.runtime.sendMessage({action: "popup"},function(response) {
			console.log("send");
			var title = document.getElementById('filename').value;
			var strLen = $("#fez").html();
		  	
		  	//strLen = '<div class="Matter">' +strLen + '.....' + '<a href='+title+'><img src="showMoreB.png" width="10px" height="10px"/></a></div>';
		  	
		  	var str = document.getElementById("filename").value;
			var res = str.replace(/\-/g, ' ');
	    	var res2 = res.replace(".html","");
		  	
			if($("#homeP").prop("style").display == "block"){
				strLen = strLen.substring(0,300);
				//$('<div class="Matter">' +strLen+ '.....' + '<a href='+title+'><img src="showMoreB.png" width="10px" height="10px"/></a></div>').insertAfter("#databox2 .Breadcrumbs");
				
				//$("#databox2 .LBox").prepend('<div class="Matter">' +strLen+ '.....' + '<a href='+title+'><img src="showMoreB.png" width="10px" height="10px"/></a></div>');
				$("#error").html('<div class="Matter">' +strLen+ '.....' + '<a href='+title+'><img src="showMoreB.png" width="10px" height="10px"/></a></div>');		//dummy
				$("#error .Matter h1").html('<a href='+str+'>'+res+'</a>');
				$("#databox2 .LBox").prepend($("#error .Matter").html());
				$("#databox1").val($("#databox2").html());
				
			}else if($("#catP").prop("style").display == "block"){
				
				console.log("cat");
				strLen = strLen.substring(0,300);
				//$('<div class="Matter">' +strLen+ '.....' + '<a href='+title+'><img src="showMoreB.png" width="10px" height="10px"/></a></div>').insertAfter("#databox4 .Breadcrumbs");
				$("#error").html('<div class="Matter">' +strLen+ '.....' + '<a href='+title+'><img src="showMoreB.png" width="10px" height="10px"/></a></div>');		//dummy
				$("#error .Matter h1").html('<a href='+str+'>'+res+'</a>');
				//$("#databox4 .LBox").prepend($("#error .Matter").html());
				$($("#error").html()).insertAfter("#databox4 .Breadcrumbs"); //org
				//$("#databox4 .Matter h1").html('<a href='+title+'>');	
				//$("#databox4 .LBox").prepend($("#error .Matter").html());
				$("#databox3").val($("#databox4").html());
			}else if($("#articleP").prop("style").display == "block"){
				
				console.log("art");
				console.log("res = " + res);
				console.log("res = " + res2);
				strLen = '<div class="Matter">' +strLen + '</div>';
				//$('<div class="Matter">' +strLen + '</div>').insertBefore('#databox6 .Navigation')
				$("#databox6 .Matter").html(strLen);		
				$("#databox5").val($("#databox6").html());
				
				$("#databox6 .Breadcrumbs").html('<div class="Front"><a href="index.html" alt="Home">Home&nbsp;</a></div><div class="Front"><a href="ToCode.html" alt="">To-Code&nbsp;</a></div><div class="Last"><a href="'+str+'" alt="">'+res2+'</a></div></div>');
				$("#databox5").val($("#databox6").html());
			}
		//});
	});
	
});

function readBlob(opt_startByte, opt_stopByte, type) {
		var files = "";
		if(type == 1){
			files = document.getElementById('files1').files;
		}else if(type == 2){
			files = document.getElementById('files2').files;
		}else if(type == 3){
			files = document.getElementById('files3').files;
		}
		
		console.log(type);
		console.log(files);
		
		if (!files.length) {
			alert('Please select a file!');
			return;
		}

		var file = files[0];
		var start = parseInt(opt_startByte) || 0;
		var stop = parseInt(opt_stopByte) || file.size - 1;

		var reader = new FileReader();

		// If we use onloadend, we need to check the readyState.
		reader.onloadend = function(evt) {
			if (evt.target.readyState == FileReader.DONE) {// DONE == 2
				if(type == 1){
					document.getElementById('databox2').innerHTML = evt.target.result;
					document.getElementById('databox1').textContent = document.getElementById('databox2').innerHTML;
				}else if(type == 2){
					document.getElementById('databox4').innerHTML = evt.target.result;
					document.getElementById('databox3').textContent = document.getElementById('databox4').innerHTML;
				}else if(type == 3){
					document.getElementById('databox6').innerHTML = evt.target.result;
					document.getElementById('databox5').textContent = document.getElementById('databox6').innerHTML;
				}
			}
		};

		var blob = file.slice(start, stop + 1);
		reader.readAsBinaryString(blob);
}

