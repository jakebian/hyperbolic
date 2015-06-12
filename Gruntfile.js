module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        browserify: {

            deps: {
                options: {
                    require: [
                        'react',
                        'jquery',
                        'd3'
                    ]
                },
                files: {
                    'client/js/build/deps.js': []
                }
            },

            buildAndWatch: {
                options: {
                    transform: [
                        ['babelify', { 'stage': 0 }]
                    ],
                    external: [
                        'react',
                        'd3',
                        'jquery'
                    ],
                    watch: true,
                    keepAlive: true
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

        }
    });

    grunt.registerTask('buildDev', ['babel', 'browserify:buildAndWatch'])
    grunt.registerTask('default', 'buildDev');

}