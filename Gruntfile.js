module.exports = function (grunt) {
    grunt.initConfig({
        uglify: {
            my_target: {
                files: {
                    'dist/cpSmoothAnchorScroll.min.js': ['dev/cpSmoothAnchorScroll.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify'); // load the given tasks
    grunt.registerTask('default', ['uglify']); // Default grunt tasks maps to grunt
};