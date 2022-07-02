var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menus");
  const navLink = document.querySelectorAll(".nav-links");
  
  const mobileMenu = () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
  }
  
  const closeMenu = () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  }
  
  hamburger.addEventListener("click" , mobileMenu)
  navLink.forEach((l) => l.addEventListener("click",closeMenu))