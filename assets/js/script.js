// jQuery(document).ready(function ($) {
//   $("#right-bar").hcOffcanvasNav({
//     levelOpen: "none",
//     disableAt: 2560,
//     levelTitles: true,
//     levelTitleAsBack: true,
//     position: "right",
//   });
// });

jQuery(document).ready(function ($) {
  $("#bottom-bar").hcOffcanvasNav({
    levelOpen: "none",
    disableAt: 2560,
    levelTitles: true,
    levelTitleAsBack: true,
    position: "top",
    levelOpen: "expand",
  });
});

new kursor({
  type: 1,
  color: "#FF4A17",
});

var swiper = new Swiper(".explore-swiper", {
  spaceBetween: 24,
  loop: true,
  centeredSlides: "true",
  grabCursor: true,
  slideActiveClass: "active",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1.1,
    },
    768: {
      slidesPerView: 1.4,
    },
    992: {
      slidesPerView: 2,
    },
  },
});

var swiper = new Swiper(".grid-Swiper", {
  spaceBetween: 30,
  loop: true,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".award-next",
    prevEl: ".award-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 2,
    },
  },
});

$(".play").on("click", function () {
  Fancybox.show([
    {
      src: "https://youtu.be/VcaAVWtP48A",
      type: "video",
      ratio: 16 / 10,
      width: 1440,
      height: 920,
    },
  ]);
});

var swiper = new Swiper(".member-swiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".mem-next",
    prevEl: ".mem-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".big", {
  spaceBetween: -100,
  loop: true,
  effect: "coverflow",
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
  },
  navigation: {
    nextEl: ".dial-next",
    prevEl: ".dial-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 2,
    },
  },
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mini", {
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".dial-next",
    prevEl: ".dial-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

var swiper = new Swiper(".big-swiper", {
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  speed: 1000,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 2,
    },
  },
});

let mybutton = document.getElementById("btn-up");

window.onscroll = function () {
  scrollFunction();
};

// function scrollFunction() {
//   if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

function topFunction() {
  document.body.scrollTo({ top: 0, behavior: "smooth" });
  document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleActive(button) {
  button.classList.toggle("active");

  var buttons = document.querySelectorAll(".time");
  buttons.forEach(function (btn) {
    if (btn !== button) {
      btn.classList.remove("active");
    }
  });
}

// $(document).ready(function () {
//   $(".time").click(function () {
//     var planType = $(this).hasClass("month") ? "month" : "year";

//     $(".time").removeClass("active");
//     $(this).addClass("active");

//     $(".price-cards").hide();
//     $(".price-cards." + planType).show();
//   });

// });

function toggleActive(button) {
  button.classList.toggle("active");

  var buttons = document.querySelectorAll(".btn");
  buttons.forEach(function (btn) {
    if (btn !== button) {
      btn.classList.remove("active");
    }
  });
}

function toggleActive(button) {
  button.classList.toggle("active");

  var buttons = document.querySelectorAll(".page-numbers");
  buttons.forEach(function (btn) {
    if (btn !== button) {
      btn.classList.remove("active");
    }
  });
}
