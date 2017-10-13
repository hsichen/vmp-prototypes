const path = require('path');

module.exports = function(grunt) {

    grunt.initConfig({
        webpack: {
            options: {
                progress: true
            },
            build: {
                entry: "./src/main.js",
                output: {
                    path: path.resolve(__dirname, 'dist'),
                    filename: "vmp.js"
                }
            }
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    quiet: false, // Optionally suppress output to standard out (defaults to false)
                    clearRequireCache: true // Optionally clear the require cache before running tests (defaults to false)
                },
                src: ['test/**/*.js']
            }
        },
        uglify: {
            bundle: {
                files: {
                    './scripts/build/dist/bundle.min.js': ['./scripts/build/dev/bundle.js']
                }
            }
        },
        watch: {
            js: {
                files: ['src/**/*.js'],
                tasks: ['webpack:build','mochaTest'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch'); // file system watcher
    grunt.loadNpmTasks('grunt-webpack'); // call webpack from here instead of the shell
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-contrib-uglify'); // utility for minifying js files

    grunt.registerTask('default', ['watch']); // make 'grunt watch' and 'grunt' commands the same

};