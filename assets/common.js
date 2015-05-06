requirejs.config({
    paths: {
        jquery: 'libs/jquery',
        alight: 'libs/alight',
        chat: 'modules/chat',
        popup: 'modules/popup'
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