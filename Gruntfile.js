module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        browserify: {

            deps: {
                files: {
                    'client/js/build/deps.js': 'client/js/src/deps.js'
                }
            },

            build: {
                options: {
                    transform: [
                        ['babelify', { 'stage': 0 }]
                    ],
                    external: [
                        'react',
                        'd3',
                        'jquery'
                    ]
                },
                files: {
                    'client/js/build/bundle.js': 'client/js/src/app.js'
                }
            }
        },


        babel: {

            options: {
                sourceMap: true
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'server/src',
                        src: ['**/*.*'],
                        dest: 'server/build/',
                        ext:'.js'
                    }
                ]
            }

        },

        watch: {
            scripts: {
                files: ['**/src/**/*.*'],
                tasks: ['build'],
            },
        }
    });

    grunt.registerTask('build', ['babel', 'browserify:build'])
    grunt.registerTask('default', ['build']);

}