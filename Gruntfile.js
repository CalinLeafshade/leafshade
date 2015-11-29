module.exports = function (grunt) {

    grunt.initConfig({
        jshint: {
            files: ['gruntfile.js', 'src/js/**/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        uglify: {
            my_target: {
                options: {
                    sourceMap: true,
                    mangle: false
                },
                files: {
                    'public/js/app.js': ['src/js/app.js', 'src/js/**/*.js'],
                    'public/js/lib.js': ['src/bower/lib.js']
                },
            }
        },
        less: {
            development: {
                options: {
                    paths: ["src/less"]
                },
                files: {
                    "public/css/style.css": "src/less/style.less"
                }
            }
        },
        watch: {
            scripts: {
                files: ['<%= jshint.files %>'],
                tasks: ['uglify']
            },
            styleSheets: {
                files: ['src/less/*.less'],
                tasks: ['less']
            }
        },
        bower_concat: {
            all: {
                dest: 'src/bower/lib.js',
                cssDest: 'public/css/lib.css',
                mainFiles: {
                    'markdown': ['lib/markdown.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-bower-concat');

    grunt.registerTask('default', ['less', 'bower_concat', 'uglify']);

};