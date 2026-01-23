(function() {
  function fixOwlImages() {
    const owlImages = document.querySelectorAll('.owl-wrapper-outer img, .owl-item img');
    owlImages.forEach(img => {
      img.style.width = '100%';
      img.style.height = 'auto';
      img.style.maxWidth = '100%';
      img.style.display = 'block';
      img.style.objectFit = 'contain'; // запазва пропорциите
    });
  }

  // При първоначално зареждане
  document.addEventListener('DOMContentLoaded', fixOwlImages);

  // Ако Owl Carousel презарежда слайдовете динамично
  const observer = new MutationObserver(fixOwlImages);
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // Допълнителна защита: повторна проверка след 2 секунди (при lazy load)
  setTimeout(fixOwlImages, 2000);
})();





