// navbar
const closeIcon = targetEl('.closeIcon');
const navContainer = targetEl(".nav-container");
const menuBarIcon = targetEl(".menuBarIcon");
closeIcon.addEventListener('click', function () {
     navContainer.style.display="none";
     closeIcon.classList.add('hidden');
   
})
menuBarIcon.addEventListener('click', function () {
    navContainer.style.display = "block";
    closeIcon.classList.remove('hidden')
})
// target element
function targetEl(id) {
    if (id != "") {
        return document.querySelector(id);
    }
    return false;
}