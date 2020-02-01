<?php
    $colection = $_POST['colection'];
    $delivery = $_POST['delivery'];
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $visitor_phone = $_POST['phone'];
	$visitor_email = $_POST['email'];
	// $message = $_POST['message'];
	
	$email_from = 'pavelperov93@gmail.com';

	$email_subject = 'New form Submission';
	
	$email_body = "User name: $colection.\n".
					"User email: $delivery.\n".
						"User phone: $fname.\n".
                            "User message: $lname.\n".
                                "Phone: $visitor_phone.\n".
                                    "Email: $visitor_email.\n";
							
	$to = 'd1719986@urhen.com';

	$headers = "From: $email_from \r\n";
	
	$headers = "Reply-To: $visitor_email \r\n";
	
	$headers = "Call-To: $visitor_phone \r\n";
	
	mail($to,$email_subject,$email_body,$headers);
	
	header("Location: form.html");
	
	?>
