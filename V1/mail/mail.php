<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'Exception.php';
    require 'PHPMailer.php';
    require 'SMTP.php';
    if (isset($_POST['name']) && !empty($_POST['name']) && isset($_POST['email']) && !empty($_POST['email']) && isset($_POST['subject']) && !empty($_POST['subject']) && isset($_POST['message']) && !empty($_POST['message'])) {

        $name = htmlspecialchars($_POST['name']);
        $email = htmlspecialchars($_POST['email']);
        $subject = htmlspecialchars($_POST['subject']);
        $message = htmlspecialchars($_POST['message']);

        $mail = new PHPMailer;
        $mail->Username = 'info@lucas-sabathe.fr'; // email
        $mail->Password = 'Nv2RxkV*-+kCVJ#'; // password
        $mail->setFrom('info@lucas-sabathe.fr', 'Lucas Sabathe Website'); // From email and name
        $mail->addAddress('sabathe.lucas@gmail.com', 'Lucas'); // to email and name
        $mail->Subject = "Nouvelle demande de contact - " . $name;
        $mail->msgHTML('<div style="text-align: center;"><h1>' . $name .'</h1> <h2>' . $email .'</h2> <h3>' . $subject . '</h3><p>' . $message . '</p></div>');
        $mail->AltBody = 'HTML messaging not supported'; // If html emails is not supported by the receiver, show this body
        $mail->SMTPOptions = array(
                            'ssl' => array(
                                'verify_peer' => false,
                                'verify_peer_name' => false,
                                'allow_self_signed' => true
                            )
                        );
        if(!$mail->send()){
            echo "Mailer Error: " . $mail->ErrorInfo;
        }else{
            header('Location: /#contact');
        }
    }
?>