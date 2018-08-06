<?php
$url = 'https://api.elasticemail.com/v2/email/send';

try{
        $post = array('from' => $email,
		'fromName' => 'Sahaj',
		'apikey' => '2b02fa25-0a45-46b4-aad5-aa1ba763edc6',
		'subject' => $subject,
		'to' => 'sahajbamba1999@gmail.com',
		'bodyHtml' => '<h1>Html Body</h1>',
		'bodyText' => $comment,
		'isTransactional' => false);
		
		$ch = curl_init();
		curl_setopt_array($ch, array(
            CURLOPT_URL => $url,
			CURLOPT_POST => true,
			CURLOPT_POSTFIELDS => $post,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_HEADER => false,
			CURLOPT_SSL_VERIFYPEER => false
        ));
		
        $result=curl_exec ($ch);
        curl_close ($ch);
		
        echo $result;	
}
catch(Exception $ex){
	echo $ex->getMessage();
}
?>