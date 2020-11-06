<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $number = $_POST['number'];

    $mailTo = "normandlubaton@icloud.com";
    $headers = "From: ".$name;
    $txt = "The customer ".$name." has booked a PC!"

    mail($mailTo, $txt, $headers);
    header("Location: tq.html?mailsent");
}