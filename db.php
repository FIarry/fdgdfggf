<?php
$host = "localhost";
$user = "root";
$pass = "mysql";
$database = "galleryDB";

$conn = mysqli_connect($host,$user,$pass,$database);

if (!$conn) {
    die("Ошибка Подключения: ".mysqli_connect_error());
};