function loadPhotos() {
    fetch('get_photos.php')
    .then(response=> response.json())
    .then((data) => {
        const gallery = document.getElementById('photoGallery')
        gallery.innerHTML = "";
        data.forEach(photo => {
            const photoDiv = document.createElement('div');
            photoDiv.innerHTML = `
            <img src="uploads/${photo.photo_name} width="200">
            <p>${photo.comment}</p>
            <hr>`;
            gallery.appendChild(photoDiv)
        })
    })
}

loadPhotos()