var weather;

var api = 'http://api.openweathermap.org/data/2.5/weather?id=';
//var id = '1268000'; //kanota
var apiKey = '&appid=0ff9668b717de7d00b1b4494085127e2';
var unit = '&units=metric';

function setup(){
	noCanvas();
	var url = api+'1275817'+apiKey+unit;
	loadJSON(url, gotDataB);
	var url = api+'1261711'+apiKey+unit;
	loadJSON(url, gotDataN);
	var url = api+'1268000'+apiKey+unit;
	loadJSON(url, gotDataK);
}

function gotDataB(data){
	weather = data;
	document.getElementById('bbsrtemp').innerText = 'Temperature : ' + data.main.temp;
	document.getElementById('bbsrhum').innerText = 'Humidity : ' + data.main.humidity;
	document.getElementById('bbsrweather').innerText = data.weather[0].main;
	document.getElementById('bbsrdesc').innerText = 'Description : ' + data.weather[0].description;
}
function gotDataN(data){
	document.getElementById('ntdtemp').innerText = 'Temperature : ' + data.main.temp;
	document.getElementById('ntdhum').innerText = 'Humidity : ' + data.main.humidity;
	document.getElementById('ntdweather').innerText = data.weather[0].main;
	document.getElementById('ntddesc').innerText = 'Description : ' + data.weather[0].description;
}
function gotDataK(data){
	document.getElementById('kantemp').innerText = 'Temperature : ' + data.main.temp;
	document.getElementById('kanhum').innerText = 'Humidity : ' + data.main.humidity;
	document.getElementById('kanweather').innerText = data.weather[0].main;
	document.getElementById('kandesc').innerText = 'Description : ' +  data.weather[0].description;
}





