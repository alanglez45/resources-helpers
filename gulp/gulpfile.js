/*
function tarea (done) {
    console.log("desde mi primer tarea...");
    done();
}
exports.primertarea= tarea;
*/
const {
    src,
    dest,
    watch,
    series,
    parallel
} = require('gulp'); // npm i --save-dev gulp
const sass = require('gulp-sass')(require('sass')); // npm i --save-dev sass gulp-sass
// sass contiene la documentacion, gulp-sass ejecuta las acciones
const postcss = require('gulp-postcss'); //npm i --save-dev gulp-postcss 
const autoprefixer = require('autoprefixer'); // npm i --save-dev autoprefixer
const sourcemaps = require('gulp-sourcemaps'); //npm i --save-dev gulp-sourcemaps
const cssnano = require('cssnano'); // npm i --save-dev cssnano 


// IMAGENES
const imagemin = require('gulp-imagemin'); // npm i --save-dev gulp-imagemin@7.0.0
const webp = require('gulp-webp'); // npm i --save-dev gulp-webp
const avif = require('gulp-avif') // npm i --save-dev gulp-avif

function css(done) {
    // Compilar SASS
    // Pasos: 1.  Identificar archivo – 2. Compilarlo – 3. Guardarlo
    src('src/scss/app.scss')
        .pipe(sourcemaps.init()) //sourcemaps es para ubicar el codigo en los archivos .scss
        .pipe(sass({
            /*outputStyle: 'compressed'*/
        })) // compressed minifica la hoja de estilos
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.')) // con el punto se guarda junto al build
        .pipe(dest('build/css'))

    done();
}

function imagenes() {
    src('src/img/**/*')
        .pipe(imagemin({
            optimizationLevel: 3
        }))
        .pipe(dest('build/img'))
}

function versionWebp() {
    const opciones = {
        quality: 50
    }
    return src('src/img/**/*.{png,jpg}')
        .pipe(webp(opciones))
        .pipe(dest('build/img'))
}

function versionAvif() {
    const opciones = {
        quality: 50
    }
    return src('src/img/**/*.{png,jpg}')
        .pipe(avif(opciones))
        .pipe(dest('build/img'))
}

function dev() {
    watch('src/scss/**/*.scss', css); // busca todos los archivos con la extension .scss
    //watch('src/img/**/*', imagenes);
}

exports.css = css;
exports.dev = dev;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.default = series(imagenes, versionWebp, versionAvif, css, dev);
/* 
series - Se inicia una tarea y hasta que finaliza, inicia la siguiente
parallel – Todas las tareas inician al mismo tiempo
*/