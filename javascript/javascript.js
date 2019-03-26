$(document).ready(function() {
  $("#applicationMenu").click(function() {
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
  $("#menuOptHome").click(function() {
    $("#idTestText").removeClass("active");
    $("#idvscodeText").removeClass("active");
    $("#idvmwareText").removeClass("active");
    $("#idpfsenseText").removeClass("active");
    $("#idTestText").addClass("active");
  });
  $("#menuOptVscode").click(function() {
    $("#idTestText").removeClass("active");
    $("#idvscodeText").removeClass("active");
    $("#idvmwareText").removeClass("active");
    $("#idpfsenseText").removeClass("active");
    $("#idvscodeText").addClass("active");
  });
  $("#menuOptVmware").click(function() {
    $("#idTestText").removeClass("active");
    $("#idvscodeText").removeClass("active");
    $("#idvmwareText").removeClass("active");
    $("#idpfsenseText").removeClass("active");
    $("#idvmwareText").addClass("active");
  });
  $("#menuOptPfsense").click(function() {
    $("#idTestText").removeClass("active");
    $("#idvscodeText").removeClass("active");
    $("#idvmwareText").removeClass("active");
    $("#idpfsenseText").removeClass("active");
    $("#idpfsenseText").addClass("active");
  });
});
