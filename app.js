const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('click', () => {
cleaarActiveClasses()

        slide.classList.add('active')
    })
}


function cleaarActiveClasses() {
    slides.forEach((slide) => {
slide.classList.remove('active')
    })
}