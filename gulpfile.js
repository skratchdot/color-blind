var gulp = require('gulp');
var jshint = require('gulp-jshint');
var nodeunit = require('gulp-nodeunit');

var jshintTask = function (task, paths) {
	gulp.task(task, function () {
		gulp.src(paths)
			.pipe(jshint())
			.pipe(jshint.reporter('default'));
	});
};

gulp.task('test', function () {
	gulp.src('test/**/*.js')
		.pipe(nodeunit());
});

gulp.task('watch', function () {
	gulp.watch(['lib/**/*.js', 'test/**/*.js'], ['jshint:lib', 'jshint:test', 'test']);
	gulp.watch(['*.js', '*.json'], ['jshint:root']);
});

// setup tasks
jshintTask('jshint:root', ['*.js', '*.json']);
jshintTask('jshint:lib', 'lib/**/*.js');
jshintTask('jshint:test', 'test/**/*.js');
gulp.task('default', ['jshint:root', 'jshint:lib', 'jshint:test', 'test', 'watch']);

// handle errors
process.on('uncaughtException', function (e) {
	console.error(e);
});
