const deleteFrame = document.getElementById("deleteFrame")
const deleteBtn = document.getElementById("deleteBtn")
const cancelBtn = document.getElementById("cancelBtn")
const displayImage = document.getElementById("imageContainerDelete")

let deleteFrameOpen = false
let curId = null

//DELETE PHOTO FUNCTION
function deletePhoto(id, name, comment) {
    if (deleteFrameOpen == false) {
        deleteFrameOpen = true
        curId = id
        deleteFrame.classList.remove("hiddenDF")
        displayImage.innerHTML = `<img src="uploads/${name}" alt="${comment}" class="displayImage">`
    } else {
        deleteFrameOpen = false
        deleteFrame.classList.add("hiddenDF")
        curId = null
    }
}

cancelBtn.addEventListener("click", (e) => {
    deleteFrameOpen = false
    curId = null
    deleteFrame.classList.add("hiddenDF")
})

deleteBtn.addEventListener("click", (e) => {
    if (deleteFrameOpen == true) {
        fetch(`delete_photo.php?id=${curId}`)
            .then(() => {
                window.location.reload()
            })
            .catch((error) => {
                alert("Произошла ошибка")
            })
    }
    deleteFrameOpen = false
    currentId = null
    deleteFrame.classList.add("hiddenDF")
})

//LOAD PHOTOS FUNCTION
function loadPhotos() {
    fetch('get_photos.php')
        .then(response => response.json())
        .then((data) => {
            const gallery = document.getElementById('photoGallery')
            gallery.innerHTML = '';
            data.forEach(photo => {
                const photoDiv = document.createElement('div');
                photoDiv.classList.add("galleryItem")
                photoDiv.innerHTML = `
            <div class="galleryItemInner"><img src="uploads/${photo.photo_name}" class="galleryImage">
            <p>${photo.comment}</p> </div> <hr>`;
                gallery.appendChild(photoDiv)
                photoDiv.addEventListener('click', (e) => {
                    deletePhoto(photo.id, photo.photo_name, photo.comment)
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