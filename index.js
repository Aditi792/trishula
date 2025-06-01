    
    //active window
    
    window.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".tabs ul li a");
    const currentPage = window.location.pathname.split("/").pop(); // e.g. 'aboutUs.html'

    links.forEach(link => {
      const linkPage = link.getAttribute("href");
      if (linkPage === currentPage) {
        link.classList.add("active");
      }
    });
  }); 
     
     
     //carousal
     
     const track = document.querySelector(".carousel-track");
      const slides = Array.from(track.children);
      const nextButton = document.querySelector(".carousel-button.next");
      const prevButton = document.querySelector(".carousel-button.prev");
      const slideWidth = slides[0].getBoundingClientRect().width;
      let currentSlide = 0;

      function moveToSlide(index) {
        track.style.transform = `translateX(-${slideWidth * index}px)`;
        currentSlide = index;
      }

      nextButton.addEventListener("click", () => {
        let nextIndex = currentSlide + 1;
        if (nextIndex >= slides.length) nextIndex = 0;
        moveToSlide(nextIndex);
      });

      prevButton.addEventListener("click", () => {
        let prevIndex = currentSlide - 1;
        if (prevIndex < 0) prevIndex = slides.length - 1;
        moveToSlide(prevIndex);
      });

      // Auto-slide every 4 seconds
      setInterval(() => {
        let nextIndex = currentSlide + 1;
        if (nextIndex >= slides.length) nextIndex = 0;
        moveToSlide(nextIndex);
      }, 4000);



      //slider

const slideContainer = document.querySelector('.slide-container');
const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');

leftBtn.addEventListener('click', () => {
  slideContainer.scrollLeft -= 300;
});
rightBtn.addEventListener('click', () => {
  slideContainer.scrollLeft += 300;
});

const magniglasses = document.querySelectorAll('.magniglass');
const zoomModal = document.getElementById('zoomModal');
const zoomedImage = document.getElementById('zoomedImage');
const thumbnailsContainer = document.querySelector('.zoom-thumbnails');
const closeModal = document.querySelector('.close');
const zoomPrev = document.querySelector('.zoom-prev');
const zoomNext = document.querySelector('.zoom-next');

const allImages = Array.from(document.querySelectorAll('.slide-img img'));
let currentIndex = 0;

function openModal(index) {
  currentIndex = index;
  zoomedImage.src = allImages[index].src;
  thumbnailsContainer.innerHTML = '';
  allImages.forEach((img, i) => {
    const thumb = document.createElement('img');
    thumb.src = img.src;
    thumb.classList.toggle('active', i === index);
    thumb.addEventListener('click', () => openModal(i));
    thumbnailsContainer.appendChild(thumb);
  });
  zoomModal.style.display = 'flex';
}

magniglasses.forEach((icon, index) => {
  icon.addEventListener('click', () => openModal(index));
});

closeModal.addEventListener('click', () => {
  zoomModal.style.display = 'none';
});

zoomPrev.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + allImages.length) % allImages.length;
  openModal(currentIndex);
});
zoomNext.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % allImages.length;
  openModal(currentIndex);
});


