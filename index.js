var _ = require('lodash');

module.exports = function(grunt) {

    if (!grunt) {
        throw 'please pass the grunt object to constructor';
    }

    if (!grunt.extendConfig) {
        grunt.loadNpmTasks('grunt-extend-config');
    }

    var extendConfig(task) {
        grunt.extendConfig(task);
        return _(task).map(function (conf, k) {
            return _.reduce(conf, function (acc, taskVal, taskName) {
                acc.push(k + ':' + taskName);
                return acc;
            }, []);
        }).flatten().value();
    };

    return {
        inline: function(task) {
            if (_.isObject(task)) {
                task = extendConfig(task);
            }
            return task;
        }
    }
};