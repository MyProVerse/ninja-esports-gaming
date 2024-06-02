// <!-- navbar -->
let menuToggle1 = document.querySelector('.menuToggle');
let header = document.querySelector('header');
let nav = document.querySelector('nav');
let checker = 0;
menuToggle1.onclick = function () {

  header.classList.toggle('active');
  if (checker == 0) {
    menuToggle1.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    checker = 1;

  }
  else {
    menuToggle1.innerHTML = '<i class="fa-solid fa-bars"></i>';
    checker = 0;

  }

}
//   <!-- hamburger menu -->
const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('change', function () {
  if (menuToggle.checked) {
    menu.classList.add('open');
  } else {
    menu.classList.remove('open');
    menu.classList.add('close');

  }
});
//   <!-- fade-up animation -->
function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

var fadeUpElements = document.querySelectorAll('.sideways-text');

function handleScroll() {
  fadeUpElements.forEach(function (element) {
    if (isElementInViewport(element) && !element.classList.contains('fade-up-active')) {
      element.classList.add('fade-up-active');
    }
  });
}

window.addEventListener('scroll', handleScroll);



//   <!-- tabs script -->
window.addEventListener('DOMContentLoaded', function () {
  // Get all tab items and tab content elements
  const tabItems = document.querySelectorAll('.tab-item1');
  const tabContents = document.querySelectorAll('.tab-content1');

  // Add click event listener to each tab item
  tabItems.forEach(function (tabItem, index) {
    tabItem.addEventListener('click', function () {
      // Remove active class from all tab items and tab contents
      tabItems.forEach(function (item) {
        item.classList.remove('active');
      });
      tabContents.forEach(function (content) {
        content.classList.remove('active');
      });

      // Add active class to the clicked tab item and corresponding tab content
      this.classList.add('active');
      tabContents[index].classList.add('active');
    });
  });
});

//   <!-- quarter tabs -->

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Get all tab items and tab content elements
  const tabItems2 = document.querySelectorAll('.tab-item2');
  const tabContents2 = document.querySelectorAll('.tab-content2');

  // Add click event listener to each tab item
  tabItems2.forEach(function (tabItem, index) {
    tabItem.addEventListener('click', function () {
      // Remove active class from all tab items and tab contents
      tabItems2.forEach(function (item) {
        item.classList.remove('active');
      });
      tabContents2.forEach(function (content) {
        content.classList.remove('active');
      });

      // Add active class to the clicked tab item and corresponding tab content
      this.classList.add('active');
      tabContents2[index].classList.add('active');
    });
  });
});

//   <!-- video player -->
// Get all play buttons, overlay buttons, and video overlays
const playButtons = document.querySelectorAll('.play-button');
const overlayButtons = document.querySelectorAll('.close-button2');
const videoOverlays = document.querySelectorAll('.video-overlay');
const closeButton1s = document.querySelectorAll('.close-button1');

// Attach event listeners to each play button
playButtons.forEach((playButton, index) => {
  playButton.addEventListener('click', () => {
    videoOverlays[index].style.display = 'flex';
  });
});

// Attach event listeners to each overlay close button
overlayButtons.forEach((overlayButton, index) => {
  overlayButton.addEventListener('click', () => {
    videoOverlays[index].style.display = 'none';
  });
});

// Attach event listeners to each close button inside video content
closeButton1s.forEach((closeButton1, index) => {
  closeButton1.addEventListener('click', () => {
    videoOverlays[index].style.display = 'none';
  });
});


//   <!--logo sliders -->


$(document).ready(function () {
  $('.logos-slide').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    wrap: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  });
});

//   <!-- carousel3 slider-->
$(document).ready(function () {
  // Initialize slick on the element with custom "Next" and "Prev" buttons
  $('.carousel3').slick({
    nextArrow: $('.custom-next-arrow3'), // Use the custom "Next" button for navigation
    prevArrow: $('.custom-prev-arrow3'), // Use the custom "Prev" button for navigation
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplaySpeed: 4000,
    autoplay: true,
    infinite: true,
    wrap: false,

    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 567, // Breakpoint for tablets and smaller screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }

    ]
  });
});
//   <!-- hero section slider -->
$(document).ready(function () {
  const slider5 = $('.hero-slider');
  function animate() {
    slider5.find('.slick-active .slideUp').addClass('slideInUp');
    slider5.find('.slick-active .slideDown').addClass('slideInDown');
  }

  slider5.slick({
    nextArrow: $('.custom-next-arrow4'),
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
    wrap: false,
    autoplay: 4000,
    speed: 200
  });

  // Call the animation function when the website loads or reloads
  $(window).on('load', function () {
    animate();
  });

  $('.custom-next-arrow4').on('click', function () {
    animate();
  });

  slider5.on('afterChange', function (event, slick, currentSlide) {
    slider5.find('.slideUp').removeClass('slideInUp');
    slider5.find('.slideDown').removeClass('slideInDown');
    animate();
  });
});

//   <!-- team-slider -->
$(document).ready(function () {
  // Initialize slick on the element with custom "Next" and "Prev" buttons
  $('.carousel').slick({
    nextArrow: $('.custom-next-arrow'), // Use the custom "Next" button for navigation
    prevArrow: $('.custom-prev-arrow'), // Use the custom "Prev" button for navigation
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplaySpeed: 4000,
    autoplay: true,
    infinite: true,
    wrap: false,

    responsive: [
      {
        breakpoint: 1000, // Breakpoint for tablets and smaller screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768, // Breakpoint for tablets and smaller screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
});