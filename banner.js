
<script>
document.addEventListener("DOMContentLoaded", function() {
  // намира всички <img> в .owl-item
  const owlImages = document.querySelectorAll('.owl-item img');

  owlImages.forEach(img => {
    img.style.width = "100%";
    img.style.height = "auto";
    img.style.maxWidth = "100%";
    img.style.display = "block";
    img.style.objectFit = "contain"; // запазва пропорциите
  });
});
</script>



