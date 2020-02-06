

//paths will allow us easy referencing
let paths = {

    styles: {

        src: [
            'node_modules/bootstrap/dist/css/bootstrap.css',
            'node_modules/font-awesome/css/font-awesome.min.css',
            //other style files here          

            'src/styles/**/*.css' //application styles
        ],
        dest: 'dist/styles/'
    },

    scripts: {
        src:[
            'node_modules/jquery/dist/jquery.js',
            // 'node_modules/bootstrap/dist/js/bootstrap.js',
            'node_modules/bootstrap/dist/js/bootstrap.bundle.js',
            'node_modules/knockout/build/output/knockout-latest.js',
            'node_modules/requirejs/require.js',

            'src/scripts/**/*.js' //application scripts e.g.
        ],
        dest: 'dist/scripts/'
    },



    html: {
        src: 'src/**/*.html',
        dest: 'dist'
    },

    other: [
        {
            src: [
                'node_modules/font-awesome/fonts/**/*'
            ],
            dest: 'dist/fonts'
        },
        {
            src: [
                'src/img/**/*'
            ],
            dest: 'dist/img'
        },
    ]

};


//first we will need a reference to gulp itself
var gulp = require('gulp'); //by default its automatically looks in the node_modules
var gutil = require('gulp-util'); // also get a reference to gutil to later use it for logging purposes
var del = require('del'); //to cleanup the dest folder
var cleanCSS = require('gulp-clean-css');//for css minification
var uglify = require('gulp-uglify'); //for js minification
var concat = require('gulp-concat');

var ts = require('gulp-typescript'); //for typescript
var tsProject = ts.createProject('tsconfig.json');//this will load the tsconfig.json file

var sourcemaps = require('gulp-sourcemaps'); //to copy over the source-maps
var babel = require('gulp-babel');


function styles(){
    return gulp.src(paths.styles.src)
            .pipe(cleanCSS())
            .pipe(gulp.dest(paths.styles.dest));
}


function scripts(){
    return gulp.src(paths.scripts.src, {sourcemaps: true})
    // .pipe(babel())
    .pipe(gulp.dest(paths.scripts.dest));

}

function html() {
    return gulp.src(paths.html.src)
        .pipe(gulp.dest(paths.html.dest));
}

function other(){
    let task;
    for (var ix = 0; ix < paths.other.length; ix++) {
        task = gulp.src(paths.other[ix].src)
            .pipe(gulp.dest(paths.other[ix].dest));
    }

    return task;
}


function tsBuild(){
    gutil.log('Building TypeScript');
    return gulp.src('src/app/*.ts')
    //  .pipe(sourcemaps.init())
     .pipe(tsProject())  
     .pipe(babel())  
     .pipe(uglify())
    //  .pipe(concat('demoApp.js'))
    // .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/app'));
}

function clean() {   
    return del(['dist']);
}


function watch() {
    gulp.watch(paths.html.src, html);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.styles.src, styles);
    gulp.watch('src/app/*.ts',tsBuild)
}


/*
 * You can use CommonJS `exports` module notation to declare tasks
 */
exports.styles = styles;
exports.scripts = scripts;
exports.other = other;
exports.html = html;
exports.clean = clean;
exports.watch = watch;



var build = gulp.series(clean,gulp.parallel(styles,tsBuild,scripts,html,other));
gulp.task('default', build);