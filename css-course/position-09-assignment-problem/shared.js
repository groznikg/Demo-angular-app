var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButton = document.querySelectorAll('.plan button');
var noButton = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');


for(var i=0; i<selectPlanButton.length; i++) {
    selectPlanButton[i].addEventListener('click', function() {
        backdrop.style.display = 'block';
        modal.style.display = 'block';
    });
}

backdrop.addEventListener('click', closeModal);

if(noButton) {
    noButton.addEventListener('click', closeModal)
}


function closeModal() {
    backdrop.style.display = 'none';
    if(modal) {
        modal.style.display = 'none';
    }
    mobileNav.style.display = 'none';
}

toggleButton.addEventListener('click', function() {
    mobileNav.style.display = 'block';
    backdrop.style.display = 'block';
});