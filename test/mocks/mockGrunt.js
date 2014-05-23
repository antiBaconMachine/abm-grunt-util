//Really hacky oversimplified grunt mock. Terrible idea.

var _ = require('lodash');

module.exports = function() {
    var config = {};

    return {
        config: function(key, val) {
            if (!val) {
                return config[key];
            }
            config[key] = val;
        },
        //this is oversimplistic compared to how grunt-extend-config does things
        extendConfig: function(val) {
            config = _.extend(config, val);
        }
    }
}