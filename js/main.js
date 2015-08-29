function getCurrentTime() {
	// save current data and time
	var currentTime = new Date();

	// save hours || minutes || seconds
	var h = currentTime.getHours();
	var m = currentTime.getMinutes();
	var s = currentTime.getSeconds();

	if( h > 12 ) {
		h = h - 12;
	}

	m = checkTime(m);
	s = checkTime(s);

	document.getElementById('time').innerHTML = 'The current time is: ' + h + ':' + m + ':' + s;

	setTimeout( function() { 
		getCurrentTime() 
	}, 1000 );
}

function checkTime(i) {

	if(i < 10) {
		i = '0' + i;
	} 
	return i;
}

