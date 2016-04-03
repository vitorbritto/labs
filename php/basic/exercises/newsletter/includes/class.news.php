<?php

/**
 * @author Vitor Britto
 * @copyright 2015
 * @email: code@vitorbritto.com.br
 * @site: http://www.vitorbritto.com.br
 */

class Newsletter
{

    var $message;
    var $for;
    var $subject;
    var $emailSender; // E-mail do remetente
    var $nameSender; // Nome do remetente
    var $emails; // Array de emails a serem enviados com copia
    var $siteName = 'Site Name goes here';
    var $alert = true;

    /*
     * Constructor
     */
    public function __construct($for = "", $subject = "", $message = "", $email = "", $name = "", $attachment = false)
    {

        $this->setFor($for);
        $this->setSubject($subject);
        $this->setMessage($message);
        if (!empty($email)) {
            $this->setSender($email, $name);
        } else {
            $this->setSender($for, $name);
        }

        $this->emails = $Bcc;
        $this->setHeader();
        if ($attachment) {
            $this->setFile();
        }

    }

    /*
     * Set Message Field
     */
    public function setMessage($message)
    {

        $this->Message = $message;

    }

    /*
     * Set Alert Message
     */
    public function setAlert($alert)
    {

        $this->alert = $alert;

    }

    /*
     * Set Subject Field
     */
    public function setSubject($subject)
    {

        $this->Subject = $subject;

    }

    /*
     * Set Email Sender Field
     */
    public function setFor($for)
    {

        $this->For = $for;

    }

    /*
     * Retrieve Data from Sender
     */
    public function setSender($email, $name = "")
    {

        $this->emailSender = $email;
        $this->nameSender = $name;

    }

    /*
     * Set Email Header
     */
    public function setHeader()
    {

        if (!empty($this->nameSender)) {
            $headers = "From: " . $this->nameSender . " <" . $this->emailSender . ">\r\n";
        } else {
            $headers = "From: $siteName <" . $this->emailSender . ">\r\n";
        }
        $this->headers = $headers;

    }

    /*
     * Set Email Header with Attachments
     */
    public function setFile($FILE = "")
    {
        $file = isset($_FILES["userfile"]) ? $_FILES["userfile"] : false;

        if (empty($FILE)) {
            $FILE = $file["tmp_name"];
            $TYPE = $file["type"];
            $NAME = $file["name"];
        } else {
            list($width, $height, $type, $attr) = getimagesize($FILE);
            $TYPE = $type;
            $NAME = end(explode("/", $FILE));
        }

        if (file_exists($FILE) and !empty($file)) {
            $fp = fopen($FILE, "rb");
            $attachment = fread($fp, filesize($FILE));
            $attachment = base64_encode($attachment);

            fclose($fp);

            $attachment = chunk_split($attachment);

            $boundary = "XYZ-" . date("dmYis") . "-ZYX";

            $HEADER = "--$boundary\n";
            $HEADER .= "Content-Transfer-Encoding: 8bits\n";
            $HEADER .= "Content-Type: text/html; charset=\"ISO-8859-1\"\n\n"; //plain
            $HEADER .= "" . $this->Message . "\n";
            $HEADER .= "--$boundary\n";
            $HEADER .= "Content-Type: " . $TYPE . "\n";
            $HEADER .= "Content-Disposition: attachment; filename=\"" . $NAME . "\"\n";
            $HEADER .= "Content-Transfer-Encoding: base64\n\n";
            $HEADER .= "$attachment\n";
            $HEADER .= "--$boundary--\r\n";

            $this->Message = $HEADER;

            $headers = "Content-type: multipart/mixed; boundary=\"$boundary\"\r\n";
            $headers .= "$boundary\n";

            $this->headers .= $headers;
        }
    }

    /*
     * Send Emails
     */
    public function sendMail($for = "", $messageStatus = "E-mail enviado com sucesso!")
    {

        if (!empty($for)) {
            $this->setFor($for);
        }

        if (mail($this->For, $this->Subject, $this->Message, $this->headers)) {
            if ($this->alert) {
                echo "<script>alert('$messageStatus')</script>";
            }
            return true;
        } else {
            if ($this->alert) {
                echo "<script>alert('Erro ao enviar e-mail.')</script>";
            }
            return false;
        }

    }

    /*
     * Create List of Emails for Newsletter
     */
    public function setCopy()
    {

        $copy = "";
        for ($a = 0; $a < count($this->emails); $a++) {
            $copy .= $this->emails[$a] . ", ";
        }
        return substr($copy, 0, -2);

    }

}
