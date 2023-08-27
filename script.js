document.addEventListener("DOMContentLoaded", function () {
    // Select all slides
    const slides = document.querySelectorAll(".slide");

    // Initialize current slide counter
    let curSlide = 0;

    // Add event listeners for next and previous slide buttons
    const nextSlideBtn = document.querySelector(".btn-next");
    const prevSlideBtn = document.querySelector(".btn-prev");

    nextSlideBtn.addEventListener("click", () => navigateSlides(1));
    prevSlideBtn.addEventListener("click", () => navigateSlides(-1));

    // Function to navigate slides
    function navigateSlides(offset) {
        curSlide = (curSlide + offset + slides.length) % slides.length;

        slides.forEach((slide, index) => {
            const translateValue = (index - curSlide) * 100;
            slide.style.transform = `translateX(${translateValue}%)`;
        })
    }
});