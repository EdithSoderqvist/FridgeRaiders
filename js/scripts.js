$(document).ready(function(){
  $('input[type="checkbox"]').click(function(){
    var li_text = $(this).next().html();
    if($(this).is(":checked")){
      $("#ingredientslist").append('<li id="select'+this.id+'">'+li_text+'</li>');
    } else {
      $("#select"+this.id).remove();
    }
  });
});
