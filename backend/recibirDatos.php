<?php
    header('Access-Control-Allow-Origin:*');
    header('Content-type: application/json' );
   

    $array = file_get_contents("datos.json");
    $json = json_encode($array);
    $data = json_decode($json);
    echo $data;
?>