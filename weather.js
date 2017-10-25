
/////^^^^%&*%$&*%*# LOOK AT NPM JS &$#&()#////////

var http = require('http');
var apikey = 'e312dbeb8840e51f92334498a261ca1d';
var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&APPID="+apikey;
///must install request
var request = require('request')


var weatherAsData = "";

request.get(weatherUrl,(error, response, weatherData)=>{
	console.log(JSON.parse(weatherData));
})
// http module has a get method
// takes 2 arguments
// 1. where
// 2. code to run when back (with the data)
// var request = http.get(weatherUrl, (theResponse)=>{
// 	console.log(theResponse.statusCode)
// 	theResponse.on('data',(chuckOfData)=>{
// 		// console.log(chuckOfData)
// 	weatherAsData += chuckOfData;
// 	});
// 	theResponse.on('end',()=>{
// 		console.log(weatherAsData)
// 	});
// });
