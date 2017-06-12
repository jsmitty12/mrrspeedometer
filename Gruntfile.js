module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jasmine: {
            mrrspeed: {
                src: 'js/**/*.js',
                options: {
                    specs: 'specs/**/*.spec.js',
                    display: 'none',
                    junit: {
                        path: 'junit/',
                        consolidate: true
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
};
