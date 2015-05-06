'use strict';

module.exports = function(grunt) {
   // var assetFolder = 'web/build/today';
    grunt.initConfig({
        requirejs: {
            compile: {
                options: {
                    //allowSourceOverwrites: true,
                    appDir: 'assets',
                    mainConfigFile: 'assets/common.js',
                    baseUrl: './',
                    dir: 'web/built/tag',
                    siteRoot: '../../',
                    modules: [
                        {
                            name: 'common',
                            include: [
                                'jquery',
                                'alight'
                            ]
                        },
                        {
                            separateCSS: true,
                            name: 'mainOne',
                            include: [
                                'apps/popupApp',
                                'apps/someCtrl'
                            ],
                            exclude: ['common']
                        }
                    ]
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('default', ['build']);
    grunt.registerTask('build', 'requirejs');
};