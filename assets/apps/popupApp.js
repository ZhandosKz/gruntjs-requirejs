define(['jquery', 'alight', 'apps/directive'], function($, alight) {
    $('h1').text('lol');
    alight.controllers.popupCtrl = function($scope) {
        $scope.name = 1;
        $scope.alertTest = function() {
            alert('test');
        }
    };
    alight.bootstrap();

    return alight.controllers.popupCtrl;
});