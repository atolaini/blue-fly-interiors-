<?php
//Only process POST requests.
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get the form fields and remove whitespace.
  $name = strip_tags(trim($_POST["name"]));
  $name = str_replace(array("\r","\n"),array(" "," "),$name);
  $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
  $message = trim($_POST["message"]);

  //check that the data was sent to the mailer
  if(empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    //set a 400 response code and exit
    http_response_code(400);
    echo "Oops! There was a problem with your submussion. Please complete the form and try again.";
    exit;
  }

  //set the recipient email address.
  //FIXEME: Update this to your desired email address
  $recipient = "adam.tolaini@gmail.com";

  //set the email subject
  $subject = "New contact form from $name";

  //Build the email content
  $email_content = "Name: $name\n";
  $email_content = "Email: $email\n\n";
  $email_content = "Phone: $phone";
  $email_content = "Messge:\n$message\n";

  //build the email headers
  $email_headers = "From: $name <$email>";

  //send the email
  if(mail($recipient, $subject, $email_content, $email_headers)) {
    //set a 200 response code
    http_response_code(200);
    echo "Thank you! Your message has been sent";
  } else {
    //set a 500 response code
    http_response_code(500);
    echo: "Oops! Something went wrong and we couldnt send your message.";
  }
} else {
  //Not a post request set a 403 response code.
  http_response_code(403);
  echo "There was a problem with your submission please try again"
}
?>