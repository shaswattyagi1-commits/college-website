let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

let slideInterval = setInterval(function() {
    plusSlides(1);
}, 4000); // Change image every 4 seconds

// Pause the slideshow on manual navigation
document.querySelector('.prev').addEventListener('click', function() {
    clearInterval(slideInterval);
    plusSlides(-1);
    slideInterval = setInterval(function() {
        plusSlides(1);
    }, 4000);
});
document.querySelector('.next').addEventListener('click', function() {
    clearInterval(slideInterval);
    plusSlides(1);
    slideInterval = setInterval(function() {
        plusSlides(1);
    }, 4000);
});
function toggleText() {
    const moreText = document.getElementById('more-text');
    const learnMoreLink = document.querySelector('.hero-learn-more a');
    
    if (moreText.style.display === 'none') {
        moreText.style.display = 'block';
        learnMoreLink.innerText = 'Show Less';
    } else {
        moreText.style.display = 'none';
        learnMoreLink.innerText = 'Learn More';
    }
}
function toggleText() {
    const moreText = document.getElementById('more-text');
    const learnMoreLink = document.getElementById('learn-more-link');
    
    if (moreText.style.display === 'none') {
        moreText.style.display = 'block';
        learnMoreLink.style.display = 'none';
    } else {
        moreText.style.display = 'none';
        learnMoreLink.style.display = 'block';
    }
}
