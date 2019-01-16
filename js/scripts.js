$(document).ready(function() {
  $("button#darkbtn").click(function() {
    $("body").removeClass();
    $("li").removeClass();
    $("body").addClass("dark-theme");
    $("li").addClass("link");
  });

  $("button#lightbtn").click(function() {
    $("body").removeClass();
    $("li").removeClass();
    $("body").addClass("light-theme");
    $("li").addClass("link");
  });

  $("button#earthbtn").click(function() {
    $("body").removeClass();
    $("li").removeClass();
    $("body").addClass("earth-theme");
    $("li").addClass("earthlink");
    $("li").addClass("earthlink:hover");
  });

  $("#JavaScriptLink").click(function() {
    $("#JavaScript").slideToggle();
  });

  $("#OperatorsLink").click(function() {
    $("#Operators").slideToggle();
  });

  $("#VariablesLink").click(function() {
    $("#Variables").slideToggle();
  });

  $("#NamingLink").click(function() {
    $("#Naming").slideToggle();
  });

  $("#FunctionsLink").click(function() {
    $("#Functions").slideToggle();
  });

  $("#MethodsLink").click(function() {
    $("#Methods").slideToggle();
  });

  $("#ArgumentsLink").click(function() {
    $("#Arguments").slideToggle();
  });

  $("#ParametersLink").click(function() {
    $("#Parameters").slideToggle();
  });

  $("#ReturnsLink").click(function() {
    $("#Returns").slideToggle();
  });


});
