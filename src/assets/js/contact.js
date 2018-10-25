$(document).ready(function() {
  //Get the form
  var form = $("#contact-form");
  //Get the message div
  var formMessage = $("#form-messages");

  $(form).submit(function(e) {
    //stop the browser from submitting the form
    e.preventDefault();
    //Serialize the data
    var formData = $(form).serialize();

    //submit the form using ajax
    $.ajax({
      type: "POST",
      url: $(form).attr("action"),
      data: formData
    })
      .done(function(response) {
        //Make sre that the formMessage div has the success class.
        $(formMessage).removeClass("error");
        $(formMessage).addClass("success");

        //set the message text
        $(formMessage).text(response);

        //clear the form
        $("#name").val("");
        $("#email").val("");
        $("#phone").val("");
        $("#message").val("");
      })
      .fail(function(data) {
        //make sure that the formMessages div has error class
        $(formMessage).removeClass("success");
        $(formMessage).addClass("error");

        //Set the message text.
        if (data.responseText !== "") {
          $(formMessage).text(data.responseText);
        } else {
          $(formMessage).text(
            "oops! Something has gone wrong and your message wasnt sent."
          );
        }
      });
  });
});
