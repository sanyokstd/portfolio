<?php
	$apiKey         = ''; // Replace API Key
	$listId         = ''; // Replace List ID
	$double_optin   = true;
	$send_welcome   = true;
	$email_type     = 'html';
	$email          = $_POST['email'];

	// Replace us8 with your datacentre, usually found at end of api key
	$submit_url     = "http://us11.api.mailchimp.com/1.3/?method=listSubscribe"; // Replace us8 with your datacentre, usually found at end of api key

	$data = array(
	  'email_address'=>$email,
	  'apikey'=>$apiKey,
	  'id' => $listId,
	  'double_optin' => $double_optin,
	  'send_welcome' => $send_welcome,
	  'email_type' => $email_type
	);
	$payload = json_encode($data);

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $submit_url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_POST, true);
	curl_setopt($ch, CURLOPT_POSTFIELDS, urlencode($payload));

	$result = curl_exec($ch);
	curl_close ($ch);
	$data = json_decode($result);

	if ($data->error){
	echo '<p>'.$data->error.'</p>';
	} else {
	echo "<p>Thanks, confirmation on its way!</p>";
	}
?>