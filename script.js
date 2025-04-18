//DELETE PHOTO FUNCTION
function deletePhoto(id) {
    if (confirm("Удалить фото?")) {
        fetch(`delete_photo.php?id=${id}`)
            .then(() => {
                window.location.reload()
            })
            .catch((error) => {
                alert("Произошла ошибка")
            })
    }
}

//LOAD PHOTOS FUNCTION
function loadPhotos() {
    fetch('get_photos.php')
        .then(response => response.json())
        .then((data) => {
            const gallery = document.getElementById('photoGallery')
            gallery.innerHTML = '';
            data.forEach(photo => {
                const photoDiv = document.createElement('div');
                photoDiv.innerHTML = `
            <img src="uploads/${photo.photo_name}" width="200">
            <p>${photo.comment}</p>
            <hr>`;
                gallery.appendChild(photoDiv)
                photoDiv.addEventListener('click', (e) => {
                    deletePhoto(photo.id)
                })
            })
        })
}

loadPhotos()


//FORM DISPLAY BUTTON SCRIPT
const btn = document.getElementById('formButton')
const formContainer = document.getElementById('formDisplay')
let isOn = false
let first = false
btn.addEventListener('click', (e) => {
    isOn = !isOn
    if (isOn) {
        formContainer.classList.add("visible")
        if (!first) {
            formContainer.classList.remove("hidden")
        }
    } else {
        first = false
        formContainer.classList.add("hidden")
        formContainer.classList.remove("visible")
    }
})