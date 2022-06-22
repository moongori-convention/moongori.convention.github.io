const {task, series, parallel, lastRun, watch}	= require('gulp');
const gulp 										= require('gulp');
const sourcemaps 								= require('gulp-sourcemaps');
const sass 										= require('gulp-sass');
const browserSync								= require('browser-sync');//.create();
const headerfooter								= require('gulp-headerfooter');
const plumber									= require('gulp-plumber');
const autoprefixer								= require('gulp-autoprefixer');
const removeEmptyLines							= require('gulp-remove-empty-lines');
const inject									= require('gulp-inject');
const ejs										= require('gulp-ejs');
const rename									= require('gulp-rename');
//const imagemin									= require('gulp-imagemin');
const concat									= require('gulp-concat');
const uglify									= require('gulp-uglify');
const babel										= require('gulp-babel');
const cssPurge									= require('css-purge');
const inlineCss									= require('gulp-inline-css');

const scssOptions = {
	errLogToConsole: true,
	indentType: 'tab', // space tab
	indentWidth: 0, // outputStyle 이 nested, expanded 인 경우에 사용
	precision: 5, //Default : 5 CSS 의 소수점 자리수
	sourceComments: false,
	outputStyle: 'compressed' //nested, expanded, compact, compressed
};

const projectList	= ['moongori-convention',	'moongori-laptop',		'moongori-mobile'];		// Folder Name
const scssList		= ['/assets/scss/',			'/src/assets/scss/',	'/src/assets/scss/'];	// Scss Folder
const cssList		= ['/assets/css/',			'/dist/assets/css/',	'/dist/assets/css/'];	// Css Folder

// Moongori-Convention
const	layoutSrc = projectList[0] + "/layout/",		// layout 경로 (header, footer)
		srcSrc = projectList[0] + "/src/",			// html 경로 (#content)
		distSrc = projectList[0] + "/dist/";			// html 경로 (#header + #content + #footer)

// Moongori-Laptop
const	laptopComponent = [
						projectList[1] + '/dist/assets/js/module.all.js',
						projectList[1] + '/dist/assets/js/module.bui.js',
						projectList[1] + '/dist/assets/js/module.bui.template.js',
						projectList[1] + '/dist/assets/css/module.global.css',
						projectList[1] + '/dist/assets/css/bui.layout.front.css',
						projectList[1] + '/dist/assets/css/bui.page.snippet.css'
					];	// convention > ui용 리소스 파일

// Moongori-Mobile
const	mobileComponent = [
						projectList[2] + '/dist/assets/js/module.all.js',
						projectList[2] + '/dist/assets/js/module.bui.js',
						projectList[2] + '/dist/assets/js/module.bui.template.js',
						projectList[2] + '/dist/assets/css/module.global.css',
						projectList[2] + '/dist/assets/css/bui.layout.front.css',
						projectList[2] + '/dist/assets/css/bui.page.snippet.css'
					];	// convention > ui-m용 리소스 파일

function servers() {
	//https://browsersync.io/docs/options
	browserSync.init({
		server: {
			baseDir: './',
			index: projectList[0] + '/index.html',
		},
		port: 4000,
	});
}

function scssTocss(num) {// scss -> css
	watch(projectList[num] + [scssList[num] + '*.scss'], function (cb) {
		gulp.src(projectList[num] + scssList[num] + '*.scss')
			.pipe(sourcemaps.init({
				loadMaps: false
			}))
			.pipe(sass(scssOptions).on('error', sass.logError))
			.pipe(autoprefixer({
					cascade: true,
				})
			)
			.pipe(sourcemaps.write('./'))
			.pipe(removeEmptyLines())
			.pipe(gulp.dest(projectList[num] + cssList[num]))
			.pipe(browserSync.stream());
		cb();
	});
}

function watchLibraryReload() {
	watch('**/*.{js,html}', {
		delay: 500
	}).on('change', function (event) {
		console.log('File change => ' + event + ', running tasks...1');
		browserSync.reload();
	});
}

const Vinyl = require('vinyl');

function watchContent(num) {
	if(num == 0) {
		const watcher = watch([srcSrc + '**/*.html']);
		watcher.on('change', function (paths, stats) {
			const file = new Vinyl({
				path: paths,
			});
			const dir = file.dirname.split("\\").reverse()[0];
			let source = '/';

			if (dir == 'ui-m') {
				source = mobileComponent;
			} else if(dir == 'ui') {
				source = laptopComponent;

			}

			gulp.src(file.dirname + '/' + file.stem + file.extname)
				.pipe(headerfooter.header(layoutSrc + 'header.html'))
				.pipe(headerfooter.footer(layoutSrc + 'footer.html'))
				.pipe(inject(gulp.src(source, {read: false}), {starttag: '<!-- inject -->'}))
				.pipe(gulp.dest(distSrc + dir));
		});
	} else {
		watch(projectList[num] + '/src/ejs/**/!(_)*.ejs', function() {
			gulp.src(projectList[num] + '/src/ejs/**/!(_)*.ejs')
				.pipe(ejs({ title: 'gulp-ejs' }))
				.pipe(rename({ extname: '.html' }))
				.pipe(gulp.dest(projectList[num] + '/dist/'));
		});
	}
}

function jsAll(num) {
	gulp.src(projectList[num] + '/src/assets/js/module/*.js'/*, { since: lastRun('js') }*/)
		.pipe(concat('module.all.js'))
		.pipe(uglify())
		.pipe(gulp.dest(projectList[num] + '/dist/assets/js'))
		.pipe(browserSync.stream());
}

function jsModule(num) {
	gulp.src([ projectList[num] + '/src/assets/js/module/module.bui.js' ]/*, { since: lastRun('js') }*/)
		.pipe(babel({
			presets: [ '@babel/env' ]
		}))
		.pipe(concat('module.bui.js'))
		.pipe(gulp.dest(projectList[num] + '/dist/assets/js'))
		.pipe(browserSync.stream());
}

function js(num) {
	const watcher = watch([ projectList[num] + '/src/assets/js/*.js' ]);
	watcher.on('change', function (paths, stats) {
		const file = new Vinyl({
			path: paths,
		});

		gulp.src(file.dirname + '/' + file.stem + file.extname)
			.pipe(babel({
				presets: [ '@babel/env' ]
			}))
			.pipe(uglify())
			.pipe(gulp.dest(projectList[num] + '/dist/assets/js'))
			.pipe(browserSync.stream());
	});
}

// function images(num) {
// 	gulp.src([ projectList[num] + '/src/assets/images/**/*.+(png|jpg|jpeg|gif|svg|ico)' ]/*, { since: lastRun('images') }*/)
// 		.pipe(plumber())
// 		.pipe(imagemin())
// 		.pipe(gulp.dest(projectList[num] + '/dist/assets/images'))
// 		.pipe(browserSync.stream());
// }

function lottie(num) {
	gulp.src([ projectList[num] + '/src/assets/lottie/**/*.json' ]/*, { since: lastRun('lottie') }*/)
		.pipe(gulp.dest(projectList[num] + '/dist/assets/lottie'))
		.pipe(browserSync.stream());
}

function mail() {
	return gulp.src('moongori-mail/*') //대상 파일
	.pipe(inlineCss())
	.pipe(gulp.dest('moongori-mail/build'))
}

async function moonevent() {
	// let folder = 'layout';
	let file = gulp.src('moongori-event/**/*');

	console.log(file);

	// if(file == '_m') {
	// 	folder = 'layout_m';
	// }

	// return gulp.src('moongori-event/*')
	
	// .pipe(gulp.dest('moongori-event/build'))
	// .pipe(gulp.dest('moongori-event/build'))



	// .pipe(headerfooter.header('moongori-event/layout/header.html'))
	// .pipe(headerfooter.footer('moongori-event/layout/footer.html'))
	// .pipe(gulp.dest('moongori-event/build'))
	// .pipe(browserSync.stream());
}

function watchs() {
	scssTocss(0);	console.log('watchs [convention] 시작');
	scssTocss(1);	console.log('watchs [laptop] 시작');
	scssTocss(2);	console.log('watchs [mobile] 시작');

	watchContent(0);
	watchContent(1);
	watchContent(2);

	js(1);
	js(2);

	/*
	jsAll(1);
	jsAll(2);

	jsModule(1);
	jsModule(2);

	images(1);
	images(2);

	lottie(1);
	lottie(2);*/

	watchLibraryReload();
}

exports.default = series(parallel(servers, watchs)); //, sprite));
exports.server = series(servers);
exports.mail         = mail;
exports.moonevent        = moonevent;
/*
Gulp 4.0 에서는 Task 실행 순서를 통제할 수 있는 API를 제공한다. 따라서 앞으로 run-sequence 모듈을 사용하지 않아도 된다.
parallel 함수는 Task를 병렬로 실행하는데 기존 gulp.task(‘build’, [‘html’, ‘css’]); 방식의 실행 순서에 대응된다.
*/
// exports.style = style;
// exports.watch = watch;