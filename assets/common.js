requirejs.config({
    paths: {
        apps: 'apps',
        jquery: 'libs/jquery',
        alight: 'libs/alight'
    },
    map: {
        '*': {
            'css': 'require/require_css/css'
        }
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