<?php
require "db.php";

if (isset($_GET['id'])) {
    $id = mysqli_real_escape_string($conn, $_GET['id']);
    $photoNameQuery = "SELECT `photo_name` FROM `photos` WHERE id = '$id'";
    $photoName = mysqli_query($conn, $photoNameQuery);
    $photoName = $photoName->fetch_assoc();
    $photoName = $photoName['photo_name'];
    if (file_exists("uploads/$photoName")) {
        unlink("uploads/$photoName");
    };

    $query = "DELETE FROM photos WHERE id = '$id'";
    mysqli_query($conn, $query);
};

mysqli_close($conn);
