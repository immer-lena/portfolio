module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            files: ['**/*.scss'],
            tasks: ['sass', 'uglify', 'cssmin']
        },
        sass: {
            dist: {
                files: {
                    'public/main.css': ['styles/style.scss']
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'public/script.min.js': ['js/script.js']
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    'public/main.min.css': 'public/main.css'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['sass', 'cssmin', 'uglify']);
};