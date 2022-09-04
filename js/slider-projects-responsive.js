const projects = document.querySelectorAll('.card-project__items');

const numberSlide = projects.length;
const btnPrevious = document.querySelector('.previous');
const btnNext = document.querySelector('.next');

let count = 0;

function slideNext() {
    projects[count].classList.remove('active');

    if (count < numberSlide -1) {
        count++
    } else {
        count = 0
    }

    projects[count].classList.add('active')
}
btnNext.addEventListener('click', slideNext)

function slidePrevious() {
    projects[count].classList.remove('active');

    if (count > 0) {
        count--
    } else {
        count = numberSlide -1
    }

    projects[count].classList.add('active')
}
btnPrevious.addEventListener('click', slidePrevious)