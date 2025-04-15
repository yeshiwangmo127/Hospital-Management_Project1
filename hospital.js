let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Automatically slide every 5 seconds
setInterval(() => {
    moveSlide(1); // Move to the next slide
}, 3000);

function submitFeedback(event) {
    event.preventDefault(); // Prevent the form from refreshing the page
    const feedbackMessage = document.getElementById('feedbackMessage');
    feedbackMessage.style.display = 'block'; // Show the confirmation message
    document.getElementById('feedbackForm').reset(); // Clear the form

    setTimeout(() => {
        feedbackMessage.style.display = 'none';
    }, 2000); // 3000 milliseconds = 3 seconds
}
