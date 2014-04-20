// MAIN FILE

module.exports = function (grunt) {
    'user strict';

    // Configurando Tarefas
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Inicia um server estático
        connect: {
            server: {
                options: {
                    port: 9001,
                    keepalive: true
                }
            }
        },

        // Concatena e minifica - Scripts
        uglify: {
            options: {
                mangle: true
            },

            target: {
                files: {
                    'js/scripts.min.js' : ['js/scripts.js']
                }
            }
        },

        // Compilação - Compass/Sass
        compass: {
            dev: {
                options: {
                    sassDir: 'sass/',
                    cssDir: 'css/',
                    outputStyle: 'expanded',
                    fontsDir: 'fonts',
                    imagesDir: 'images/',
                    generatedImagesDir: 'sprites/',
                    relativeAssets: true
                }
            }
        },

        // Observa mudanças nos arquivos
        watch: {
            sass: { // Compilação
                files : 'sass/**',
                tasks : 'compass'
            },
            js: { // Concayenação + Minificação
                files: 'js/scripts.js',
                tasks: 'uglify'
            }
        }

    });

    // Carregando plugins
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Registrando tarefas
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('createserver', ['connect:server']);
};
