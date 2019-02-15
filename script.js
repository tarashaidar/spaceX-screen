window.onload = function() {


	function time() {
		var d = new Date();
		var hms = [];
		var text;
		hms[0] = d.getHours();
	    hms[1] = d.getMinutes();
	    hms[2] = d.getSeconds();
	    for (var i = 0; i < hms.length; i++) {
	    	if (hms[i] < 10) {
	    		hms[i] = "0" + hms[i];	
	    	};
		};
	    document.querySelector(".general__day-time").innerHTML = hms[0] + ":" + hms[1] + ":" + hms[2];	
	};    
    setInterval(time, 0);



var interval = setInterval(function () {

var alarmCount = document.querySelector('#alarms-count').innerText;
var alarmCount = parseInt(alarmCount);
if(alarmCount>=10){
	clearInterval(interval);
	return;
}
document.querySelector('#alarms-count').innerText = alarmCount + 1},1000);


    // emuletes error of the crew systems
    function emulateError() {
   	
    	document.getElementById("perigee").innerHTML = "0.00 m";
    	document.getElementById("apogee").innerHTML = "0.00 m";
    	document.getElementById("altitude").innerHTML = "0.00 m";
    	document.getElementById("range").innerHTML = "0.00 m";

    	
    	document.getElementById("system-msg").innerHTML = "Systems Do Not Response";



    	document.getElementById("perigee").classList.add('error');
    	document.getElementById("apogee").classList.add('error');
    	document.getElementById("altitude").classList.add('error');
    	document.getElementById("range").classList.add('error');

    	document.getElementById("alarms-count").classList.add('error');
    	document.getElementById("system-msg").classList.add('error');
    	document.getElementById("alarm-text").classList.add('error');
    };



    setTimeout(emulateError, 10000);






















}

