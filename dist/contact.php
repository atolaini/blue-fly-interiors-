<?php
//Variables
$from = $_POST['email'];
$sendTo = 'adam.tolaini@gmail.com';
$subject = 'New message from contact form';
$fields = array('name' => 'Name', 'phone' => 'phone', 'email' => 'Email', 'message' => 'Message');
$okMessage = 'Success';
$errorMessage = 'Something went wrong';

try {
  if(count($_POST) == 0) throw new \Exception('Form is empty');
  $emailText = 'You have a new message from your contact form\n==============\n';

  foreach($_POST as $key =>value) {
    if(isset($fields[$key])) {
      $emailText .= "$fields[$key]: $value\n";
    }
  }

  $headers = array('Content-Tyoe: text/plain; charset="UTF-8";',
  'From: ' .$from,
  'Reply-To: ' .$from,
  'Return-Path: ' .$from,
);

//send mail
mail($sendTo, $subject, $emailText, implode("\n", $headers));
$responseArray = array('type' => 'success', 'message' => $okMessage);

}

catch (\Exception $e)
{
  $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}

if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
  header('Content-Type: application/json');

  echo $encoded;
}
else {
  echo $responseArray['message']
}
