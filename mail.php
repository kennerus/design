<?php
$subject = 'Test Subject';
$mailTo = 'example@gail.com';
$layout = '<html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: %s</p>
                        <p>Телефон: %s</p>  
                        <p>Сообщение: %s</p>                   
                    </body>
                </html>';
$headers  = "Content-type: text/html; charset=utf-8 \r\n";


$result = array_filter($_POST, function ($item) {
    if(!empty($item)) {
        return true;
    }return false;
});

$text = (isset($result['message'])) ? $result['message'] : '';
$phone = (isset($result['tel'])) ? $result['tel'] : '';

if(isset($result['name'], $result['email'])){
    $headers .= sprintf("From: Отправитель %s\r\n", $result['email']);
    $message = sprintf($layout, $result['name'], $phone, $text);
    $status = mail($mailTo, $subject, $message, $headers);
    if($status) echo true;
}
echo false;
