const slides = document.querySelectorAll('.slide');
const counter = document.getElementById('counter');
const progressBar = document.getElementById('progress-bar');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const dotsContainer = document.getElementById('dots');

let currentSlide = 0;
const totalSlides = slides.length;

slides.forEach((slide, index) => {
    const dot = document.createElement('button');

    dot.type = 'button';
    dot.className = 'dot';

    dot.addEventListener('click', function() {
        showSlide(index);
    });

    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function showSlide(index) {

    if (index < 0 || index >= totalSlides) {
        return;
    }

    currentSlide = index;

    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentSlide);
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });

    counter.textContent =
        String(currentSlide + 1).padStart(2, '0') +
        ' / ' +
        String(totalSlides).padStart(2, '0');

    progressBar.style.width =
        ((currentSlide + 1) / totalSlides * 100) + '%';

    prevButton.disabled = currentSlide === 0;
    nextButton.disabled = currentSlide === totalSlides - 1;
}

nextButton.addEventListener('click', function() {
    showSlide(currentSlide + 1);
});

prevButton.addEventListener('click', function() {
    showSlide(currentSlide - 1);
});

document.addEventListener('keydown', function(event) {

    if (event.key === 'ArrowRight') {
        showSlide(currentSlide + 1);
    }

    if (event.key === 'ArrowLeft') {
        showSlide(currentSlide - 1);
    }

});

showSlide(0);
