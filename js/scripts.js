$(document).ready(function() {
  $( "input[type='checkbox']" ).change(function() {
    $("#ingredients").append("<div>" + $(this).val() + "</div>");
  });
});
