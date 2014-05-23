/*
 * grunt-graph-runner
 * https://github.com/antiBaconMachine/grunt-graph-runner
 *
 * Copyright (c) 2014 Ollie Edwards
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({

            bump: {
                options: {
                    pushTo: 'origin'
                }
            },


            jasmine_node: {
                all: ['spec/']
            },

            jshint: {
                all: [
                    'Gruntfile.js',
                    'tasks/*.js',
                    'spec/*.js',
                    'lib/*.js'
                ],
                options: {
                    jshintrc: '.jshintrc'
                }
            }

        }
    );

// By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'jasmine_node']);
};