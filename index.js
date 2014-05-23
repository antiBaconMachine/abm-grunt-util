var _ = require('lodash');
var util = require('./lib/util');

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