console.error("Google Sign-In prerequisites");

module.exports = function (context) {
	var hooksPath;
	
	path = require('path');
	
	hooksPath = path.resolve(context.opts.projectRoot, "plugins", context.opts.plugin.id, "hooks/ios");
	console.log(hooksPath);
  var child_process = require('child_process'),
      deferral = require(path.resolve(hooksPath, "q.js")).defer();
		
  var output = child_process.exec('npm install', {cwd: __dirname},
      function (error) {
        if (error !== null) {
          console.log('exec error: ' + error);
          deferral.reject('npm installation failed');
        }
        deferral.resolve();
      });

  return deferral.promise;
};
