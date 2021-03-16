<?php
if(isset($_POST['name']) && isset($_POST['surname']) && isset($_POST['mail']) && isset($_POST['msg']) && isset($_POST['phone'])){
  $name = addslashes(str_replace('>','&gt;',str_replace('<','&lt;',$_POST['name'])));
  $surname = addslashes(str_replace('>','&gt;',str_replace('<','&lt;',$_POST['surname'])));
  $mail = addslashes(str_replace('>','&gt;',str_replace('<','&lt;',$_POST['mail'])));
  $phone = addslashes(str_replace('>','&gt;',str_replace('<','&lt;',$_POST['phone'])));
  $miasto = addslashes(str_replace('>','&gt;',str_replace('<','&lt;',$_POST['miasto'])));
  $text = addslashes(str_replace('>','&gt;',str_replace('<','&lt;',$_POST['msg'])));
  $data = date('d-m-Y');
  $czas = date('G:i');
  $data = $data.' ('.$czas.')';
  $ip = $_SERVER['REMOTE_ADDR'];

  //spr. poprawnosci podanego maila
    //jak bedziemy na serwerze to odkomentowac to zeby wysylalo maila
    mail("zbadamy@twojeznamiona.pl",
        'Wiadomosc od pacjenta',
        'Od: '.$name.' '.$surname.'<br />email: '.$mail."<br />tel: ".$phone."<br />data: ".$data."<br />miasto: ".$miasto."<br /><br />".$text,
        "From: zbadamy@twojeznamiona.pl \r\nReply-To: ".$mail."\r\nContent-type: text/html; charset=utf-8",
        '-fzbadamy@twojeznamiona.pl'
        );
    //przekazanie informacji o powodzeniu uperacji
    echo '1';
}

?>
