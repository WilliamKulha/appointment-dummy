$(document).ready(function(){
  $("form#contactform").submit(function(event){
    event.preventDefault();
    window.contactName = $("input#name").val();
    window.contactComputer = $("input#computer").val();
    window.contractProblem = $("input#problem").val();
    window.contactDate = $("input#date").val();
    window.contactTime = $("input#time").val();
    $('.contactName').text(contactName);
    $('.contactDate').text(contactDate);
    $('.contactTime').text(contactTime);

    $("div#modalsuccess").show();
  });
  $("button#closemodal").click(function(){
    $("div#modalsuccess").hide();
    debugger;
  })
})
