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
    $(".menuTitle").removeClass("active");
    $("#idTestText").addClass("active");
  });
  $("#menuOptVscode").click(function() {
    $(".menuTitle").removeClass("active");
    $("#idvscodeText").addClass("active");
  });
  $("#menuOptVmware").click(function() {
    $(".menuTitle").removeClass("active");
    $("#idvmwareText").addClass("active");
  });
  $("#menuOptPfsense").click(function() {
    $(".menuTitle").removeClass("active");
    $("#idpfsenseText").addClass("active");
  });
  $("#menuOptHtml").click(function() {
    $(".menuTitle").removeClass("active");
    $("#idHtmlText").addClass("active");
  });
  $("#menuOptCss").click(function() {
    $(".menuTitle").removeClass("active");
    $("#idCssText").addClass("active");
  });
  $("#menuOptJava").click(function() {
    $(".menuTitle").removeClass("active");
    $("#idJavaScriptText").addClass("active");
  });
  $("#menuOptReact").click(function() {
    $(".menuTitle").removeClass("active");
    $("#idReactText").addClass("active");
  });
  $("#menuOptBash").click(function() {
    $(".menuTitle").removeClass("active");
    $("#idBashText").addClass("active");
  });
  $("#menuOptPowershell").click(function() {
    $(".menuTitle").removeClass("active");
    $("#idPowershellText").addClass("active");
  });
  $("#menuOptBatch").click(function() {
    $(".menuTitle").removeClass("active");
    $("#idBatchText").addClass("active");
  });
});
