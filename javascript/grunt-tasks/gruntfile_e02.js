// MAIN FILE - GRUNTFILE

module.exports = function(grunt) {

"use strict";

    // Initialize Config
    grunt.initConfig({
        config: grunt.file.readJSON('config.json'), // global configs
        pkg:    grunt.file.readJSON('package.json'), // parsing package.json metadatas
        vendor: grunt.file.readJSON('.bowerrc').directory // get component directory when using Bower
    });

    // Load per-task config from separate files
    grunt.loadTasks('tasks');

    // Register custom tasks
    grunt.registerTask();
};


// EXTERNAL FILE
// --------------------------------
// JSHint task in "./tasks" folder
// --------------------------------

module.exports = function(grunt) {

    grunt.config('jshint', {
        // Config here
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

};
