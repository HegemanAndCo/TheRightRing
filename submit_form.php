<?php
// Get form data
$formData = json_decode(file_get_contents('php://input'), true);

// Construct email message
$message = "Color: " . $formData['color'] . "\n";
$message .= "Size: " . $formData['size'] . "\n";
// Add more fields as needed

// Send email
$to = 'matthewneuffer@gmail.com'; // Replace with your email address
$subject = 'New Product Customization Form Submission';
$headers = 'From: webmaster@example.com' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

// Send the email
$mailSent = mail($to, $subject, $message, $headers);

// Return response
if ($mailSent) {
    echo 'Form submitted successfully!';
} else {
    http_response_code(500);
    echo 'Failed to submit the form. Please try again later.';
}
?>
