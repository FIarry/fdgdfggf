<?php
include "db.php";
$query = "SELECT * FROM photos ORDER BY id DESC";
$result = mysqli_query($conn,$query);
$photos = array();

while ($row = mysqli_fetch_assoc($result)) {
    $photos[] = $row;
};

echo json_encode($photos);
mysqli_close($conn);