<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Галлерея</title>
</head>
<body>
    <div class="wrapper">
        <div class="formContainer">
            <h1 class="title">Загрузить Фото</h1>
            <form action="upload.php" method="post" enctype="multipart/form-data">
                <input type="file" name="photo" accept="image/*" required> <br>
                <textarea name="comment" placeholder="Комментарий" required></textarea> <br>
                <button type="submit">Загрузить</button>
            </form>
        </div>
        <div class="galleryContainer">
            <h2 class="title">Галлерея</h2>
            <div class="photoGallery">

            </div>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>