$(document).ready(function(){
  ("form#contactform").click(function(event){
    event.preventDefault();
    var contactName = $("#name").val();
  })
})
