<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $to = 'atulwebhm@gmail.com'; // Replace with your own email address
    $subject = 'New booking request';
    $message = 'Booking details:' . "\r\n";
    $message .= 'Check in date: ' . $_POST['checkin'] . "\r\n";
    $message .= 'Check out date: ' . $_POST['checkout'] . "\r\n";
    $message .= 'Number of guests: ' . $_POST['guests'] . "\r\n";
    $message .= 'Number of nights: ' . $_POST['nights'] . "\r\n";
    $message .= 'Name: ' . $_POST['name'] . "\r\n";
    $message .= 'Phone: ' . $_POST['phone'] . "\r\n";

    $headers = 'From: ' . $_POST['email'] . "\r\n" .
        'Reply-To: ' . $_POST['email'] . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        echo 'Thank you for your booking request. We will contact you shortly.';
    } else {
        echo 'There was an error sending your booking request. Please try again later.';
    }
}
?>
