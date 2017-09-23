
$(document).ready(function(){



  $("#services").click(function(){
    $("#slidetwo").show();
    $("#slideone").hide();
    $("#slidethree").hide();
  });

  $("#profile").click(function(){
    $("#slideone").show();
    $("#slidetwo").hide();
    $("#slidethree").hide();
  });

  $("#more").click(function(){
    $("#slidethree").show();
    $("#slidetwo").hide();
    $("#slideone").hide();
  });
});
