$(document).ready(function() {
  $("button#darkbtn").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-theme");
  });

  $("button#lightbtn").click(function() {
    $("body").removeClass();
    $("body").addClass("light-theme");
  });

  $("#JavaScriptLink").click(function() {
    $("#JavaScript").slideToggle();
  });

  $("#OperatorsLink").click(function() {
    $("#Operators").slideToggle();
  });
});
