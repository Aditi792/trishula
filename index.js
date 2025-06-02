  
  //navbar
  const toggle = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');

  toggle.addEventListener('click', () => {
    console.log("clicked");
    navbar.classList.toggle('active');
  });
    
    
    
    
    
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


  const slidess = document.querySelectorAll('.carousel-slide');
  const tracks = document.querySelector('.carousel-track');
  const prevBtn = document.querySelector('.carousel-button.prev');
  const nextBtn = document.querySelector('.carousel-button.next');
  const leftText = document.querySelector('.carousel-text-left');
  const rightText = document.querySelector('.carousel-text-right');

  const texts = [
    { left: "COMMITMENT, INTEGRITY, RESULT", right: "SMPL MEANS CREDIBILITY REDEFINED" },
    { left: "WE TRUST YOUR TRUST IN US", right: "Trishula MARITIME PVT. LTD." },
    { left: "COMMITMENT", right: "STONGLY DEDICATED TO MEET CLIENTS EXPECTATION" },
    { left: "INTEGRITY", right: "Driven by principles and a genuine moral code" },
    { left: "RESULT", right: "Constant endeavour for desired output" },
  ];

  let currIndex = 0;

  function updateSlide() {
    const slideWidth = slidess[0].clientWidth;
    tracks.style.transform = `translateX(-${currIndex * slideWidth}px)`;

    // Remove previous animations
    leftText.style.animation = 'none';
    rightText.style.animation = 'none';
    void leftText.offsetWidth; // Trigger reflow
    void rightText.offsetWidth;

    // Update text
    leftText.textContent = texts[currIndex].left;
    rightText.textContent = texts[currIndex].right;

    // Trigger animations again
    leftText.style.animation = 'slideInLeft 1s forwards';
    rightText.style.animation = 'slideInRight 1s forwards';
  }

  nextBtn.addEventListener('click', () => {
    currIndex = (currIndex + 1) % slidess.length;
    updateSlide();
  });

  prevBtn.addEventListener('click', () => {
    currIndex = (currIndex - 1 + slidess.length) % slidess.length;
    updateSlide();
  });

  // Initialize
  window.addEventListener('load', updateSlide);
