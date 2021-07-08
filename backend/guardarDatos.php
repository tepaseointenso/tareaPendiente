<?php

    header("content-type: application/json");
    // header("Access-Control-Allow-Origin:*");

    // $array = file_get_contents("php://input");

    // //transformamos el array obtenido en un json
    // $json = json_encode($array);

    // //transformamos el json obtenido en una variable de php con la funcion decode
    // $data = json_decode($json);

    // echo $data;

    // $archivo = fopen("datos.json", "w");
    // fwrite($archivo, $data);


    $json_string = json_encode($array);
    
    $fp = fopen('results.json', 'w');
    fwrite($fp, $json_string);
    fclose($fp);

    
    $str = file_get_contents('./results.json');
    $array = json_decode($str, true); // decode the JSON into an associative array


?>