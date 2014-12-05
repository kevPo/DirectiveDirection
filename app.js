$(function() {
  $('[expandable-selection] article').hide();
  $('[expandable-selection] h2').click(function() {
    $(this).parent().find('article').toggle();
  });
});
