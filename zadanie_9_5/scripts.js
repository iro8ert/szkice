console.log(window);

//setTimeOut

function raiseAlarm() {
	alert('wiadomość co dwie sekundy czyli 2000 milisekund');
}

var delay = setTimeOut(raiseAlarm, 2000);
//raiseAlarm(); // pamiętaj o wywowłaniu funkcji. bez tego nie za bardzo działa :) 

