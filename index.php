<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Галлерея</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <div class="wrapper">
        <div class="formBackgroundWrapper" id="formDisplay">
            <div class="formContainer">
                <h1 class="title">Загрузить Фото</h1>
                <form action="upload.php" method="post" enctype="multipart/form-data">
                    <input type="file" name="photo" accept="image/*" class="input1" required> <br>
                    <textarea name="comment" placeholder="Комментарий" class="input2" required rows="7" cols="50"></textarea> <br>
                    <button type="submit" class="input3">Загрузить</button>
                </form>
                <button class="formButton" id="formButton">
                    <img src="assets/disc.png" alt="Загрузить Фото" class="formIconBtn">
                </button>
            </div>
        </div>
        <div class="galleryContainer">
            <h2 class="title">Галлерея</h2>
            <div id="photoGallery" class="photoGallery">

            </div>
        </div>
    </div>
    <script src="script.js"></script>
</body>

</html>