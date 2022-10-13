var gulp = require('gulp');
var jshint = require('gulp-jshint');
var nodeunit = require('gulp-nodeunit');

var jshintTask = function (task, paths) {
	return gulp.task(task, function () {
		return gulp.src(paths)
			.pipe(jshint())
			.pipe(jshint.reporter('default'));
	});
};

gulp.task('test', function () {
	return gulp.src('test/**/*.js')
		.pipe(nodeunit());
});

gulp.task('watch', function (done) {
	gulp.watch(['lib/**/*.js', 'test/**/*.js'], gulp.series('jshint:lib', 'jshint:test', 'test'));
	gulp.watch(['*.js', '*.json'], gulp.series('jshint:root'));
	done();
});

// setup tasks
jshintTask('jshint:root', ['*.js', '*.json']);
jshintTask('jshint:lib', 'lib/**/*.js');
jshintTask('jshint:test', 'test/**/*.js');
gulp.task('default', gulp.parallel('jshint:root', 'jshint:lib', 'jshint:test', 'test', 'watch'));

// handle errors
process.on('uncaughtException', function (e) {
	console.error(e);
});
