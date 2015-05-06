require(['./common'], function() {
    require(['alight', 'chat/app', 'popup/app'], function(alight) {
        alight.bootstrap();
    });
});