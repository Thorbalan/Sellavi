
document.addEventListener("DOMContentLoaded", function() {
  // намира всички изображения вътре в .caption
  const captionImages = document.querySelectorAll('.caption img');
  
  captionImages.forEach(img => {
    img.style.width = "100%";
    img.style.height = "auto";
    img.style.display = "block"; // премахва празни пространства под изображението
    img.style.objectFit = "contain"; // гарантира правилно мащабиране
  });
});

