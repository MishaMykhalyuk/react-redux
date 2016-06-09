const gulp = require('gulp');
const del = require('del');
const browserify = require('browserify');
const source = require('vinyl-source-stream');

gulp.task('bundle', ['clean-bundle'], () => {
	return browserify({entries: './src/js/index.js', debug: true})
		.transform('babelify', {presets: ['es2015', 'react']})
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('dist/js/'));
});

gulp.task('watch', ['bundle'], () => {
	gulp.watch('src/js/*.js', ['bundle']);
});

gulp.task('clean-bundle', () => del('dist/js/bundle.js', {force: true}));

gulp.task('default', ['watch']);