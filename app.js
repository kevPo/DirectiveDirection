// $(function() {
//   $('[expandable-selection] article').hide();
//   $('[expandable-selection] h2').click(function() {
//     $(this).parent().find('article').toggle();
//   });
// });

var app = angular.module("myApp", []);

app.directive("expandableSection", function() {
  return {
    restrict: 'E',
    template: '<h2>{{title}}</h2><article>{{body}}</article>',
    scope: true,
    link: function($scope, $element, attrs) {
      $scope.title = attrs.sectionTitle;
      $scope.body = attrs.sectionBody;
      $element.find('article').hide();
      $element.find('h2').click(function() {
        $element.find('article').toggle();
      });
    }
  };
});
