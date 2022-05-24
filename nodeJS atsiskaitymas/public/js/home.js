const uploadModalKnopke = document.querySelector('#upload');
const uploadModal = document.querySelector('.uploadModal');
const uploadModalBackground = document.querySelector('.bgc');
const closeModalButton = document.querySelector('.closeModalButton');

uploadModalKnopke.addEventListener('click', () => {
    uploadModal.classList.toggle('hidden');
    uploadModalBackground.classList.toggle('blur')
})
closeModalButton.addEventListener('click', () => {
    uploadModal.classList.add('hidden')
    uploadModalBackground.classList.remove('blur')
})