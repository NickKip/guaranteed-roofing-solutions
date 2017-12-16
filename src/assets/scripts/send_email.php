<?php
    require 'PHPMailerAutoload.php';

    $mail = new PHPMailer;

    $name = $_POST['name'];
    $email = $_POST['email'];
    $enquiry = $_POST['enquiry'];

    function clean_string($string) {

        $bad = array("content-type","bcc:","to:","cc:","href");
        return str_replace($bad,"",$string);
    }

    $emailBody .= "Name: ".clean_string($name)."\n\n";
    $emailBody .= "Email: ".clean_string($email)."\n\n";
    $emailBody .= "Enquiry: ".clean_string($enquiry)."\n\n";

    //$mail->SMTPDebug = 3;                               // Enable verbose debug output

    $mail->isSMTP();
    $mail->Host = 'mail3.gridhost.co.uk';
    $mail->SMTPAuth = true;
    $mail->Username = 'websitesendmail@guaranteedroofingsolutions.co.uk';
    $mail->Password = 'thisisadummypasswordforwebsiteemailsender';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    $mail->setFrom('websitesendmail@guaranteedroofingsolutions.co.uk', 'Website');
    $mail->addAddress('info@guaranteedroofingsolutions.co.uk');
    $mail->addBCC('nick.kipling1@gmail.com');

    $mail->isHTML(false);

    $mail->Subject = 'New Website Enquiry';
    $mail->Body    = $emailBody;

    if(!$mail->send()) {

        echo 'Message could not be sent.';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    } else {

        // $path = str_replace("scripts", "", __DIR__);
        // $html = file_get_contents($path . 'success/index.html');

        // echo $html;

        header( 'Location: http://www.guaranteedroofingsolutions.co.uk/success/' ) ;
    }
?>