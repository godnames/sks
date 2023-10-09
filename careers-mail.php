<?php
// Get the form data
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$position = $_POST['comments'];

// Set the recipient email address
$to = "atulwebhm@gmail.com";

// Set the email subject
$subject = "New job application from $first_name $last_name";

// Set the email message
$email_body = "You have received a new job application from your website.\n\n";
$email_body .= "Name: $first_name $last_name\n";
$email_body .= "Email: $email\n";
$email_body .= "Phone: $phone\n";
$email_body .= "Position Applied: $position";

// Set the email headers
$headers = "From: $email\n";
$headers .= "Reply-To: $email\n";

// Send the email
if(mail($to, $subject, $email_body, $headers)) {
    echo "Thank you for your job application. We will get back to you soon!";
} else {
    echo "Oops! Something went wrong and we couldn't send your job application.";
}
?>
