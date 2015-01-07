#!/usr/bin/env node

'use strict';

// ============================================================================
// MODULES
// ============================================================================

var cmd  = require('commander'),
    rjs  = require('requirejs'),
    sh   = require('shelljs'),
    path = require('path');

require('colors');

// ============================================================================
// SETTINGS
// ============================================================================

var SRC_FOLDER  = './app',
    DIST_FOLDER = './public';


// ============================================================================
// COMMANDS
// ============================================================================

cmd
    .command('all')
    .description('optimize CSS/JS files and copy files to deploy.')
    .action(function(){
        styles();
        scripts();
        deploy();
    });

cmd
    .command('js')
    .description('optimize JS files.')
    .action(scripts);

cmd
    .command('css')
    .description('optimize CSS files.')
    .action(styles);

cmd
    .command('deploy')
    .description('copy files to deploy')
    .action(deploy)


// ============================================================================
// TASKS
// ============================================================================

function scripts() {
    sh.echo('→ Optimizing JS'.cyan);
    rjs.optimize({
        optimizeJs: 'standard',
        jsIn: 'scripts/main.js',
        out: path.join(SRC_FOLDER, 'scripts/main.min.js')
    }, function(response) {
        sh.echo(response);
        sh.echo('✔ optimized JS files'.green);

    });
}

function styles() {
    sh.echo('→ Optimizing CSS'.cyan);
    rjs.optimize({
        optimizeCss: 'standard',
        cssIn: 'styles/style.css',
        out: path.join(SRC_FOLDER, 'styles/style.min.css')
    }, function(response) {
        sh.echo(response);
        sh.echo('✔ optimized CSS files'.green);
    });
}

function deploy() {
    sh.echo('→ Copying files'.green);
    sh.cp('-rf', SRC_FOLDER + '/styles/style.min.css, ' + DIST_FOLDER + '/styles/style.min.css');
    sh.cp('-rf', SRC_FOLDER + '/scripts/main.min.js, ' + DIST_FOLDER + '/scripts/main.min.js');
}
















