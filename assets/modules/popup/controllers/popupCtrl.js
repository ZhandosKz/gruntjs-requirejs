define(['alight'], function(alight) {
    return alight.controllers.popupCtrl = function($scope) {
        $scope.name = 1;
        $scope.alertTest = function() {
            alert('test');
        }
    };
});