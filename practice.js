var http = require("http");
var request = require('request');
var fs = require('fs');


// fs.readFile(file, [encoding], [callback]);
// file = (string) filepath of the file to readFile
// encoding defaults to uft8 if not specified...but use uft8 if file is txt to avoid JSON parse to read data
// callback is the function you want to run when the file has been read and the contents are ready
// callback = function(err,data)

fs.readFile('file1.txt','utf8', function(err,data){
	if(err){
		return console.log(err);
	}else{
		console.log(data.toUpperCase())

		fs.writeFile('file2.txt', data.toUpperCase(), 'utf8', function(err){
			if(err){
				return console.log(err)
			}else{
				// console.log('file1.txt > file2.txt')
			}
		});
	}
});

// var stuff = fs.readFileSync('file1.txt')
// console.log(stuff)

// fs.writeFile(filename, data, [encoding], [callback])

