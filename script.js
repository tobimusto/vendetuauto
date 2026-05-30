document.addEventListener('DOMContentLoaded', () => {
  // Navbar scroll effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Form submission to WhatsApp
  const form = document.getElementById('venderForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Get values
      const marca = document.getElementById('marca').value;
      const modelo = document.getElementById('modelo').value;
      const ano = document.getElementById('ano').value;
      const km = document.getElementById('km').value;
      const version = document.getElementById('version').value;
      const precio = document.getElementById('precio').value;
      const nombre = document.getElementById('nombre').value;
      const detalle = document.getElementById('detalle').value;

      // Format message
      let message = `Hola VendeTuAuto! Quería consultar para vender mi vehículo:%0A%0A`;
      message += `🚗 *Vehículo:* ${marca} ${modelo} ${version}%0A`;
      message += `📅 *Año:* ${ano}%0A`;
      message += `🛣️ *Kilometraje:* ${km} km%0A`;
      if (precio) message += `💰 *Precio pretendido:* $${precio}%0A`;
      message += `👤 *Mi nombre es:* ${nombre}%0A`;
      if (detalle) message += `%0A📝 *Detalles extra:* ${detalle}`;

      // Open WhatsApp
      const waNumber = '5491154129974';
      const waUrl = `https://wa.me/${waNumber}?text=${message}`;
      window.open(waUrl, '_blank');
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
