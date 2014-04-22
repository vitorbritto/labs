'use strict';

module.exports = function(grunt) {

    // Module Requires
    // --------------------------
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);


    // Init Config
    // --------------------------

    var appConfig = {

        // Dirs
        dirs: {
            js:   '../assets/js',
            sass: '../assets/sass',
            css:  '../assets/css',
            img:  '../assets/images'
        },

        // Metadata
        pkg: grunt.file.readJSON('package.json'),
        banner:
        '\n' +
        '/*\n' +
         ' * -------------------------------------------------------\n' +
         ' * <%= pkg.title %> - v<%= pkg.version %>\n' +
         ' *\n' +
         ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\n' +
         ' * -------------------------------------------------------\n' +
         ' */\n' +
         '\n',

        // Sync multiple browsers and devices
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        '<%= dirs.css %>/style.css',
                        '<%= dirs.js %>/app.min.js',
                        '../*.php'

                    ]
                },
                options: {
                    watchTask: true,
                    ghostMode: {
                        scroll: true,
                        links: true,
                        forms: true,
                        clicks: true
                    }
                }
            }
        },

        // Watch Task
        watch: {
            options: {
                livereload: true
            },
            css: {
                files: '<%= dirs.sass %>/**/*.scss',
                tasks: 'compass'
            },
            js: {
                files: '<%= jshint.all %>',
                tasks: ['jshint', 'uglify']
            }
        },

        // Linting
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%= dirs.js %>/main.js'
            ]
        },

        // Minify and concat
        uglify: {
            options: {
                mangle: true,
                banner: '<%= banner %>'
            },
            dist: {
                files: {

                    '<%= dirs.js %>/app.min.js': [

                        // Custom JavaScript - Your script goes here
                        '<%= dirs.js %>/main.js',

                        // Legacy - Support for old browsers
                        // '<%= dirs.js %>/legacy/*'
                    ]
                }
            }
        },

        // Compile Sass/Scss to CSS
        compass: {
            dist: {
                options: {
                    force: true,
                    config: 'config.rb',
                    outputStyle: 'compressed'
                }
            }
        },

        // FTP Deploy
        'ftp-deploy': {
            build: {
                auth: {
                    host: 'ftp.domain.com',
                    port: 21,
                    authKey: 'key1'
                },
                src: '../',
                dest: '/www/PATH/to/project/',
                exclusions: [
                    '../**.DS_Store',
                    '../**Thumbs.db',
                    '../.git/*',
                    '../.gitignore',
                    '../.editorconfig',
                    '../assets/sass/*',
                    '../assets/js/legacy/*',
                    '../assets/js/main.js',
                    '../assets/fonts/*.zip',
                    '../src/**',
                    '../*.md',
                    '../htaccess.txt'
                ]
            }
        },

        // Rsync Deploy
        rsync: {
            options: {
                args: ['--verbose'],
                exclude: [
                    '../**.DS_Store',
                    '../**Thumbs.db',
                    '../.git/*',
                    '../.gitignore',
                    '../.editorconfig',
                    '../assets/sass/*',
                    '../assets/js/legacy/*',
                    '../assets/js/main.js',
                    '../assets/fonts/*.zip',
                    '../src/**',
                    '../*.md',
                    '../htaccess.txt'
                ],
                recursive: true,
                syncDest: true
            },
            staging: {
                options: {
                    src: '../',
                    dest: '~/PATH/to/project/',
                    host: 'user@host.com',
                }
            },
            production: {
                options: {
                    src: '../',
                    dest: '~/PATH/to/project/',
                    host: 'user@host.com',
                }
            }
        }
    };

    grunt.initConfig(appConfig);


    // Register tasks
    // --------------------------

    // Start server and watch for changes
    grunt.registerTask('default', ['browserSync', 'watch']);

    // Run build
    grunt.registerTask('build', ['jshint', 'uglify', 'compass']);

    // Deploy Methods
    grunt.registerTask('ftp', ['build', 'ftp-deploy']);
    grunt.registerTask('rsync', ['build', 'rsync']);

    // Aliases Tasks
    grunt.registerTask('b', ['build']);
    grunt.registerTask('f', ['ftp']);
    grunt.registerTask('r', ['rsync']);

};
