// Node is not JS, but reads JS
// You can use it like '$ python NAMEOFFILE' to run some JS, because node reads JS
// We still have access to all the native elements

var atlTeams = [
	'Braves',
	'Falcons',
	'United',
	'Hawks'
]

// console.log(atlTeams)

var atl = {
	bball: 'Hawks',
	football: 'Falcons',
	soccer: 'United',
	baseball: 'Braves'
}



// Just like python, there are some modules built in to node.js (like we import in python.....import x from x)
// in order to access them, you use require
var http = require('http');
// console.log(http)
///////create server is a method of the http OBJECT. it takes one argument- the function to run when someone connects via http
var server = http.createServer((req, res)=>{
	// console.log(req); /////someone has to make an http request for something to actually happen so this doesnt' do anything
	// console.log(req.rawHeaders);
	//******res = response = say something back to the browser
	// writeHead sets the http headers, 2 args- 
	// 1.status code 
	// 2.mime type
	// res.writeHead(200,{'content-type':'text/html'}) ////200 means OK
	res.writeHead(200,{'content-type':'text/text'})
	res.write('<h1>Hello, instrepid traveler, this is actually YOUR node server. Hope you are having a good day</h1>')
	res.end();
})


/////you MUSt use a port higher than 1024, everything below belongs to root
console.log(`server is listening for connections on port 8000.`);
server.listen(8000) /////making a connection to the server