<?php
// Retrieve form data
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['comments'];

// Check if a file was uploaded
if ($_FILES['attachment']['error'] == UPLOAD_ERR_OK) {
    $attachment = $_FILES['attachment'];
    $attachment_name = $attachment['name'];
    $attachment_tmp_name = $attachment['tmp_name'];

    // Set up email
    $to = 'atulwebhm@gmail.com';
    $subject = 'New Contact Form Submission';
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"boundary123\"\r\n";

    // Build email body
    $body = "--boundary123\r\n";
    $body .= "Content-Type: text/plain; charset=\"iso-8859-1\"\r\n";
    $body .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $body .= "First Name: $first_name\r\n";
    $body .= "Last Name: $last_name\r\n";
    $body .= "Email: $email\r\n";
    $body .= "Phone: $phone\r\n";
    $body .= "Message:\r\n$message\r\n\r\n";
    $body .= "--boundary123\r\n";
    $body .= "Content-Type: application/octet-stream; name=\"$attachment_name\"\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n";
    $body .= "Content-Disposition: attachment; filename=\"$attachment_name\"\r\n\r\n";
    $body .= chunk_split(base64_encode(file_get_contents($attachment_tmp_name)))."\r\n";
    $body .= "--boundary123--";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo 'Message sent successfully';
    } else {
        echo 'An error occurred while sending the message';
    }
} elseif ($_FILES['attachment']['error'] == UPLOAD_ERR_NO_FILE) {
    // Set up email without attachment
    $to = 'atulwebhm@gmail.com';
    $subject = 'New Contact Form Submission';
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=\"iso-8859-1\"\r\n";

    // Build email body
    $body = "First Name: $first_name\r\n";
    $body .= "Last Name: $last_name\r\n";
    $body .= "Email: $email\r\n";
    $body .= "Phone: $phone\r\n";
    $body .= "Message:\r\n$message\r\n";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo 'Message sent successfully';
    } else {
        echo 'An error occurred while sending the message';
    }
} else {
    // Handle upload errors
    switch ($_FILES['attachment']['error']) {
        case UPLOAD_ERR_INI_SIZE:
        case UPLOAD_ERR_FORM_SIZE:
            echo 'The uploaded file exceeds the maximum file size allowed.';
            break;
    }
    
    
    ?>
       
