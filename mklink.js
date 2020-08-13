var exec = require("child_process").exec;
var cmd = 'mklink /D \"D:\\work2020\\learn_symlinks\\node_modules\" \"D:\\work2020\\learn_symlinks\\node_modules_win\"';
exec(cmd,{
	maxBuffer: 1024 * 2000
}, function(err, stdout, stderr) {
	if (err) {
		console.log(err);
	} else if (stderr.lenght > 0) {
		console.log(stderr)
	} else {
		console.log(stdout);
	}
});