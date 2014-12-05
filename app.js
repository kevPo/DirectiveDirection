// $(function() {
//   $('[expandable-selection] article').hide();
//   $('[expandable-selection] h2').click(function() {
//     $(this).parent().find('article').toggle();
//   });
// });

var app = angular.module("myApp", []);

app.directive("expandableSection", function() {
  return function($scope, $element) {
    $element.find('article').hide();
    $element.find('h2').click(function() {
      $element.find('article').toggle();
    });
  };
});
