// Edit
const editButton = document.getElementById('editButton')
const editForm = document.getElementById('myForm')

// Forms
const inputNama = document.getElementById('inputNama')
const inputRole = document.getElementById('inputRole')
const inputAvailability = document.getElementById('inputAvailability')
const inputUsia = document.getElementById('inputUsia')
const inputLokasi = document.getElementById('inputLokasi')
const inputExperience = document.getElementById('inputExperience')
const inputEmail = document.getElementById('inputEmail')
const inputFile = document.getElementById('inputFile')
const submitButton = document.getElementById('submitButton')

// Target
const targetName = document.getElementById('targetName')
const targetRole = document.getElementById('targetRole')
const targetAvailability = document.getElementById('targetAvailability')
const targetUsia = document.getElementById('targetUsia')
const targetLokasi = document.getElementById('targetLokasi')
const targetPengalaman = document.getElementById('targetPengalaman')
const targetEmail = document.getElementById('targetEmail')
const targetImage = document.getElementById('targetImage')

// Function edit form button
editButton.addEventListener('click', toggleEditForm)
submitButton.addEventListener('click', submitForm)

function toggleEditForm (event) {
    editForm.classList.toggle ('hide-content')
}

function submitForm (event) {
    event.preventDefault()
    const currentName = inputNama.value
    const currentRole = inputRole.value
    const currentAvailability = inputAvailability.value
    const currentUsia = inputUsia.value
    const currentLokasi = inputLokasi.value
    const currentExperience = inputExperience.value
    const currentEmail = inputEmail.value
    const currentImage = inputFile.files[0]

    targetName.innerHTML = currentName
    targetRole.innerHTML = currentRole
    targetAvailability.innerHTML = currentAvailability
    targetUsia.innerHTML = currentUsia
    targetLokasi.innerHTML = currentLokasi
    targetPengalaman.innerHTML = currentExperience
    targetEmail.innerHTML = currentEmail
    targetImage.innerHTML = currentImage

    if(currentImage) {
        const reader = new FileReader()

        reader.onload = function (e) {
            targetImage.src = e.target.result
        }

        reader.readAsDataURL (currentImage);
        console.log(currentImage)
        console.log('File sudah diinput')
    }

    toggleEditForm()
}