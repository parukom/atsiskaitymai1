// upload module
const uploadModalKnopke = document.querySelector('#upload');
const uploadModal = document.querySelector('.uploadModal');
const uploadModalBackground = document.querySelector('.bgc');
const closeModalButton = document.querySelector('.closeModalButton');
// register login module
const signUpLoginModule = document.querySelector('#sign')
const signModal = document.querySelector('.signModal')
const chooseLogin = document.querySelector('.chooseLoginModal')
const chooseRegister = document.querySelector('.chooseRegisterModal')
const loginModal = document.querySelector('.loginModal')
const registerModal = document.querySelector('.registerModal')
const offModal = document.querySelector('.offModal');

/// upload module
uploadModalKnopke.addEventListener('click', () => {
    uploadModal.classList.toggle('hidden');
    uploadModalBackground.classList.toggle('blur')
})
closeModalButton.addEventListener('click', () => {
    uploadModal.classList.add('hidden')
    uploadModalBackground.classList.remove('blur')
})

// regsiter login module
signUpLoginModule.addEventListener('click', () => {
    signModal.classList.toggle('hidden')
    uploadModalBackground.classList.toggle('blur')
})
chooseRegister.addEventListener('click', () => {
    if (loginModal.classList != 'hidden') {
        loginModal.classList.add('hidden')
        registerModal.classList.remove('hidden')
    }
})
chooseLogin.addEventListener('click', () => {
    if (registerModal.classList != 'hidden') {
        registerModal.classList.add('hidden')
        loginModal.classList.remove('hidden')
    }

})
offModal.addEventListener('click', () => {
    signModal.classList.add('hidden')
    uploadModalBackground.classList.remove('blur')
})