function skillsMember() {
    return {
        name: 'skillsMember',
        restrict: 'E',
        templateUrl: 'app/components/member/skills.html',
        scope: {
            skills: '='
        },
        link: function(scope, element, attrs) {
            // code here
        }
    };
}