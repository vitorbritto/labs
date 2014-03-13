module.exports = function(grunt) {

    "use strict";

    require('load-grunt-tasks')(grunt);

    var appConfig = {

        dirs: {
            js:   "assets/js",
            sass: "assets/sass",
            css:  "assets/css",
            img:  "assets/images"
        },

        pkg: grunt.file.readJSON("package.json"),

        php: {
            open: {
                options: {
                    port: 8008,
                    hostname: '0.0.0.0',
                    base: '.',
                    bin: 'php',
                    open: true
                }
            }
        },

        watch: {
            options: {
                livereload: true
            },
            css: {
                files: "<%= dirs.sass %>/{,*/}*.scss",
                tasks: "compass"
            },
            js: {
                files: "<%= jshint.all %>",
                tasks: ["jshint", "uglify"]
            }
        },

        jshint: {
            options: {
                jshintrc: ".jshintrc"
            },
            all: [
                "Gruntfile.js",
                "<%= dirs.js %>/main.js"
            ]
        },

        uglify: {
            options: {
                mangle: false
            },
            dist: {
                files: {
                    "<%= dirs.js %>/main.min.js": [
                    "<%= dirs.js %>/main.js"
                    ]
                }
            }
        },

        compass: {
            dist: {
                options: {
                    force: true,
                    config: "config.rb"
                }
            }
        }
    };

    grunt.initConfig(appConfig);

    grunt.registerTask("default", [ "php:open", "watch" ]);

};
