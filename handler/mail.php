<?php 
require_once('./../phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$nameUser = $_POST['nameUser'];
$nameCompany = $_POST['nameCompany'];
$description = $_POST['description'];
$phone = $_POST['phone'];
$email = $_POST['email'];



//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'summarymarkova@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'E8861e2c2103'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('summarymarkova@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('natka.markova.1995@mail.ru');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'ответ на резюме';
$mail->Body    = '' .$nameUser. ' <br> '.$phone. '<br>'.$description.'<br>' .$email. '';
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
	header('location: ../thank-you.php');
}
?>