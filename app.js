///http is a part of node core. it is built in we just have to ask for it
var http = require('http');
////same with fs (file system)
////fs gives node access to THIS computers file system
var fs = require('fs')

////cannot do alert or window.alert because we aren't in the DOM anymore 
////we don't have the window anymore

function renderHomePage(){
	var theHTMLToGet = fs.readFileSync('homePage.html');
	return theHTMLToGet;
}

function renderScripts(){
	var jsToGet = fs.readFileSync('scripts.js');
	return jsToGet;
}

var server = http.createServer((req, res)=>{

	console.log(req.url); ////will print off the requested url minus the host
	if(req.url === '/'){ ///user showed up at rooot doamin (home page){
		var homePageHTML = renderHomePage()
		res.writeHead(200,{'content-type':'text/html'})
		res.end(homePageHTML)
	}else if(req.url === '/scripts.js'){
		var jsContent = renderScripts();
		res.writeHead(200,{'content-type':'text/javascript'})
		res.end(jsContent)
	}else if(req.url === '/logo.png'){
		var img = fs.readFileSync('logo.png')
		res.writeHead(200,{'content-type':'image/png'})
		res.end(img)
	}else{
		res.writeHead(404,{'content-type':'text/html'})
		res.end('<h1>Sorry this page does not exist</h1>')
	}
	

	res.writeHead(200,{'content-type':'text/html'})
	res.end('<h1>sanity check</h1>');
});

///tell the server created with http.createserver to listen to por 8001
///whenever someone makes a request via HTTP to this port on THIS computer, the function/callback will fire with the req and res objects
server.listen(8001) ////if anyone goes to the server run that code above
console.log('Server is listening for http traffic on port 8001')