requirejs.config({
    paths: {
        apps: 'apps',
        jquery: 'libs/jquery',
        alight: 'libs/alight'
    },
    shim: {
        'alight': {
            deps: ['jquery'],
            exports: 'alight'
        },
        'libs/underscore': {
            exports: '_'
        }
    }
});