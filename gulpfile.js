const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function css(done){
    src('src/scss/app.scss') //src identifica
        .pipe( sass())       //sass compila   
        .pipe( dest('build/css'))              //dest almacena
    done();
    
}

function dev(done){
    watch('src/scss/app.scss', css);
    done();
}

exports.css = css;
exports.dev = dev;