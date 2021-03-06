var fs      = require("fs"),
express     = require("express"),
app         = express(),
wkhtmltopdf = require("wkhtmltopdf")
path        = require("path");

var public_path = path.join(__dirname,"/public/images");
switch(process.platform) {
	case 'linux' :
		wkhtmltopdf.command = path.join(__dirname,'/wkhtmltopdf');
		break;
	case 'darwin' :
		wkhtmltopdf.command = path.join(__dirname,'/wkhtmltopdf');
		break;
	case 'win32' :
		wkhtmltopdf.command = path.join(__dirname,'/wkhtmltopdf');
		break;
	case 'sunos' :
		wkhtmltopdf.command = path.join(__dirname,'/wkhtmltopdf');
		break;
	case 'freebsd' :
		wkhtmltopdf.command = path.join(__dirname,'/wkhtmltopdf');
		break;
}
app.use(express.static(__dirname + '/public/'));
app.get("/",function(req,res) {
	fs.readFile(__dirname + '/views/index-inner1.html', 'utf8', function(err, html) {
		// console.log(html);
		// console.log(typeof(html));
		// console.log(public_path);
		var result = html.replace(/images/g, public_path);
		// console.log(result);
		wkhtmltopdf(result).pipe(res);
	});
});

app.listen(3000, function() {
	console.log("server is listening on port:: 3000");
});