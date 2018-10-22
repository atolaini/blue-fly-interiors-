$(document).ready(function() {
  var form = $("#contact-form");

  form.validator();

  form.on("submit", function(e) {
    if (!e.isDefaultPrevented()) {
      var url = "contact.php";

      $.ajax({
        type: "POST",
        url: url,
        data: $(this).serialize(),
        success: function(data) {
          var alert = $(".message-alert");
          var messageAlert = "alert-" + data.type;
          var messageText = data.message;

          if (messageAlert && messageText) {
            alert.text(messageText);
            $("#contact-form")[0].rest();
          }
        }
      });
      return false;
    }
  });
});
