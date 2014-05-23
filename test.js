var __ = require('lodash');
var obj = {
    shell:
    {
        foo: {
            bar: '123'
        },
        spam: {
            eggs: 'abc'
        }
    },
    copy:
    {
        foo: {
            bar: '123'
        },
        spam: {
            eggs: 'abc'
        }
    }
};
module.exports = function (task) {
    task = task || obj;
    return __(task).map(function (conf, k) {
        return __.reduce(conf, function (acc, taskVal, taskName) {
            acc.push(k + ':' + taskName);
            return acc;
        }, []);
    }).flatten().value();
};