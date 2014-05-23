abm-grunt-util
==============

Utils for use in grunt plugins or Gruntfiles

###contains

inline: function(task)

Adds the following preprocessing features to grunt task lists:

* Falsy values are removed from the list. This enables concise inline conditionals

```js
var inline = require('inline');
var doIt = true;
grunt.registerTask('foo', inline([
    'bar',
    (doIt ? 'baz' : false)
]));
```

* Nested arrays are flattened

```js
var inline = require('inline');
var doIt = true;
grunt.registerTask('foo', inline([
    'bar',
    (doIt ? ['baz','bam'] : false)
]));
```

* Objects are interpreted as extensions for Grunt config

```js
var inline = require('inline');
grunt.registerTask('foo', inline([
    'bar',
    {
        shell: {
            list: {
                command: 'll'
            }
        }
    }
]));
```

The above will register the task `'shell:list'` and set the task list to `['bar','shell:list']`