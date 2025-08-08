document.querySelectorAll('.tag').forEach(tag => {
  tag.addEventListener('mousemove', function(e) {
    const width = this.offsetWidth;
    const height = this.offsetHeight;
    const eixoX = (e.offsetX / width - 0.5) * 2; // -1 a 1
    const eixoY = (e.offsetY / height - 0.5) * 2; // -1 a 1
    this.style.transform = `rotateY(${-eixoX*12}deg) rotateX(${eixoY*12}deg) scale(1.07)`;
  });
  tag.addEventListener('mouseleave', function() {
    this.style.transform = 'none';
  });
});
