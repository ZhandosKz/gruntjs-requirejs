'use strict';

module.exports = function(grunt) {
    var assetFolder = 'web/build/today';
    grunt.initConfig({
        requirejs: {
            compile: {
                options: {
                    //allowSourceOverwrites: true,
                    appDir: 'assets',
                    mainConfigFile: 'assets/common.js',
                    baseUrl: './',
                    dir: 'web/built/tag',
                    modules: [
                        {
                            name: 'common',
                            include: [
                                'jquery',
                                'alight'
                            ]
                        },
                        {
                            name: 'mainOne',
                            include: [
                                'apps/popupApp'
                            ],

                            exclude: ['common']
                        }
                    ]
                }
            }
        }
        //requirejs: {
        //    compile: {
        //        options: {
        //            appDir: 'test',
        //            dir: 'test-build',
        //            mainConfigFile: 'test/common.js',
        //            modules: [
        //                {
        //                    name: 'common',
        //                    include: ['jquery']
        //                }
        //            ]
        //        }
        //    }
        //}
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('default', ['build']);
    grunt.registerTask('build', 'requirejs');
};