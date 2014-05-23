var _ = require('lodash');
var util = require('./lib/util');

/**
 * Wrapper for using utils is a grunt file or plugin
 * @param grunt
 * @returns {{inline: inline}}
 */
module.exports = function(grunt) {

    if (!grunt) {
        throw 'please pass the grunt object to constructor';
    }

    if (!grunt.extendConfig) {
        grunt.loadNpmTasks('grunt-extend-config');
    }

    return {
        inline: function(task) {
           util.inline(task, grunt.extendConfig);
        }
    }
};