<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require('src/Exception.php');
require('src/PHPMailer.php');
require('src/SMTP.php');

$mail = new PHPMailer(true);
try {
 //Server settings
 $mail->CharSet = 'UTF-8';
 $mail->SMTPDebug = 0; // debug on - off
 $mail->isSMTP(); 
 $mail->Host = 'mail.argesta.com.tr'; // SMTP sunucusu örnek : mail.alanadi.com
 $mail->SMTPAuth = true; // SMTP Doğrulama
 $mail->Username = 'iletisim@argesta.com.tr'; // Mail kullanıcı adı
 $mail->Password = 'argestailetisim'; // Mail şifresi
 $mail->SMTPSecure = 'ssl'; // Şifreleme
 $mail->Port = 465; // SMTP Port 587
$mail->SMTPOptions = array(
 'ssl' => array(
 'verify_peer' => false,
 'verify_peer_name' => false,
 'allow_self_signed' => true
 )
);

 //Alıcılar
 $mail->setfrom('iletisim@argesta.com.tr', 'İletişim Formu');
 $mail->addAddress('info@argesta.com.tr');
 //$mail->addReplyTo($_POST['mail'], $_POST['name']);

 //İçerik
 $mail->isHTML(true);
 $mail->Subject = 'İletişim Formu';
 $mail->Body = "<b>İsim: </b>" . $_POST['name'] . "<br>";
 $mail->Body .= "<b>Soyisim: </b>" . $_POST['surname'] . "<br>";
 $mail->Body .= "<b>Telefon Numarası: </b>" . $_POST['phone'] . "<br>";
 $mail->Body .= "<b>Açıklama: </b>" . $_POST['desc'] . "<br>";

 $mail->send();
 echo "<script>location.href = '/urun/iletisim-onay.html'</script>";
} catch (Exception $e) {
 echo 'Mesajınız İletilemedi. Hata: ', $mail->ErrorInfo;
}

?>