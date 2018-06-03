var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task("default",function()
{
    nodemon({
        script:"app.js",
        ext:"js",
        ignore:['./node_modules/**'],
        env:{
            PORT:"8002"
        }
        })
        .on("restart", function(){
                console.log('restarting node server');
        });
});