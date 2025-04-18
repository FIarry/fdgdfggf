<?php
include "db.php";

if (isset($_FILES['photo']) && isset($_POST['comment'])) {
    $comment = mysqli_real_escape_string($conn, $_POST['comment']);
    $photo_name = $_FILES['photo']['name'];
    $photo_tmp = $_FILES['photo']['tmp_name'];
    move_uploaded_file($photo_tmp, "uploads/" . $photo_name);
    $stmt = $conn->prepare("INSERT INTO `photos`(`photo_name`,`comment`) VALUES (?,?)");
    $stmt->bind_param('ss', $photo_name, $comment);
    if ($stmt->execute()) {
        mysqli_close($conn);
        header("Location: index.php");
    } else {
        die("Произошла ошибка!: " . $stmt->error);
    };
};
