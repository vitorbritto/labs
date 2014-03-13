"use strict";
 
module.exports = function(grunt) {
 
    // Load all grunt tasks
    require('load-grunt-tasks')(grunt);
 
    var appConfig = {
 
        // Dirs
        dirs: {
            js:   "assets/js",
            sass: "assets/sass",
            css:  "assets/css",
            img:  "assets/images"
        },
 
        // Metadata
        pkg: grunt.file.readJSON("package.json"),
        banner:
        "\n" +
        "/*\n" +
         " * -------------------------------------------------------\n" +
         " * Project: <%= pkg.title %>\n" +
         " * Version: <%= pkg.version %>\n" +
         " *\n" +
         " * Author:  <%= pkg.author.name %>\n" +
         " * Website: <%= pkg.author.url %>\n" +
         " * Email:   <%= pkg.author.email %>\n" +
         " *\n" +
         " *\n" +
         " * Copyright (c) <%= grunt.template.today(\"yyyy\") %> <%= pkg.author.name %>\n" +
         " * -------------------------------------------------------\n" +
         " */\n" +
         "\n",
 
         connect: {
            server: {
                options: {
                    port: 9000,
                    base: ".",
                    hostname: "localhost",
                    livereload: true,
                    open: true
                }
            }
        },
 
        // Watch Task
        watch: {
            options: {
                livereload: true
            },
            css: {
                files: "<%= dirs.sass %>/{,*/}*.{scss,sass}",
                tasks: ["compass"]
            },
            js: {
                files: "<%= jshint.all %>",
                tasks: ["jshint", "uglify"]
            },
            html: {
                files: "/*.html"
            }
        },
 
        // Linting
        jshint: {
            options: {
                jshintrc: ".jshintrc"
            },
            all: [
                "Gruntfile.js",
                "<%= dirs.js %>/main.js"
            ]
        },
 
        // Minify and concat
        uglify: {
            options: {
                mangle: false,
                banner: "<%= banner %>"
            },
            dist: {
                files: {
                    "<%= dirs.js %>/main.min.js": [
                    "<%= dirs.js %>/main.js"
                    ],
                    "<%= dirs.js %>/plugins.min.js": [
                    "<%= dirs.js %>/plugins.js"
                    ]
                }
            }
        },
 
        // Compile Sass/Scss to CSS
        compass: {
            dist: {
                options: {
                    force: true,
                    config: "config.rb"
                }
            }
        }
    };
 
 
    // Init Config
    grunt.initConfig(appConfig);
 
 
    // Register tasks
    // --------------------------
 
    // Do all stuff, except for optimize images and deploy
    grunt.registerTask( "default", [ "connect", "watch" ]);
 
};
