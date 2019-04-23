$("#cityButton").click(function() {
  $("#cities").slideToggle("slow", function() {
    $("#cityButton i").toggleClass("fa-arrow-circle-up fa-arrow-circle-down");
  });
});
