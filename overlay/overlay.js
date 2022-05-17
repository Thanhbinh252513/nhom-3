const triggerOverlay = document.querySelector('.trigger-overlay')
const btnOverlayClose = document.querySelector('.overlay__close')
const overLay = document.querySelector('.overlay')
const openOverlay = document.querySelector('.is__open')
const closeOverlay = document.querySelector('.overlay__scale')

function showOverlay() {
    overLay.classList.add('is__open')
    overLay.classList.remove('overlay__scale')
}
function hiddenOverlay() {
    overLay.classList.remove('is__open')
    overLay.classList.add('overlay__scale')
}
btnOverlayClose.addEventListener('click', hiddenOverlay)
triggerOverlay.addEventListener('click', showOverlay)