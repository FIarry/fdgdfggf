<?php
include "db.php";

if(isset($_FILES['photo']) && isset($_POST['comment'])) {
    $comment = mysqli_real_escape_string($conn,$_POST['comment']);
    $photo_name = $_FILES['photo']['name'];
    $photo_tmp = $_FILES['photo']['tmp_name'];
    move_uploaded_file($photo_tmp,"/uploads/".$photo_name);
    $query = "INSERT INTO photos (photo_name, comment) VALUES ('$photo_name','$comment')";
    mysqli_query($conn,$query);
};

mysqli_close($conn);
header("Location: index.php");