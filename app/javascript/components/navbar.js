function initUpdateNavbarOnScroll() {
  const navbar = document.querySelector('.navbar-wagon');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= (window.innerHeight * 0.6)) {
        navbar.classList.add('navbar-wagon-blue');
      } else {
        navbar.classList.remove('navbar-wagon-blue');
      }
    });
  }
}

export { initUpdateNavbarOnScroll };
