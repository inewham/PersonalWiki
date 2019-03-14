$(document).ready(function() {
  $("#propertySubMenu").click(function() {
    $("#sub-menu-property").slideToggle("slow");
  });
  $("#tenantSubMenu").click(function() {
    $("#sub-menu-tenant").slideToggle("slow");
  });
  $("#reportsSubMenu").click(function() {
    $("#sub-menu-reports").slideToggle("slow");
  });
  $("#maintSubMenu").click(function() {
    $("#sub-menu-maint").slideToggle("slow");
  });
  $("#diarySubMenu").click(function() {
    $("#sub-menu-diary").slideToggle("slow");
  });
  $("#nav-bar-header-mob-title ").click(function() {
    $("#left-menu").slideToggle("slow");
    $("#mobDashCart").css("transform", "rotate(180deg)");
  });
  $("#menuOptVscode").click(function() {
    $("#idvscodeText").toggleClass("active");
    $("#idTestText").toggleClass("active");
  });
});
