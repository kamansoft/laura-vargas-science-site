
<nav class="bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
  <div class="container mx-auto px-4 py-3">
    <div class="flex justify-between items-center">
      <a href="#" class="text-science-700 font-montserrat font-bold text-xl">
        Lic. Laura Vargas
      </a>
      
      <!-- Mobile menu button -->
      <div class="md:hidden">
        <button 
          class="p-2 rounded-md text-science-800 hover:bg-science-100"
          onclick="toggleMenu()"
          aria-label="Toggle menu"
        >
          <svg id="menu-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
          <svg id="close-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 hidden"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
        </button>
      </div>

      <!-- Desktop navigation -->
      <div class="hidden md:flex items-center space-x-8">
        <a href="#home" class="text-science-900 hover:text-science-700 font-medium">Inicio</a>
        <a href="#services" class="text-science-900 hover:text-science-700 font-medium">Servicios</a>
        <a href="#about" class="text-science-900 hover:text-science-700 font-medium">Acerca de</a>
        <a href="#testimonials" class="text-science-900 hover:text-science-700 font-medium">Testimonios</a>
        <a href="#contact" class="text-science-900 hover:text-science-700 font-medium">Contacto</a>
        <a href="#contact" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-science-600 hover:bg-science-700 text-white px-4 py-2">Reservar Consulta</a>
      </div>
    </div>

    <!-- Mobile menu -->
    <div id="mobile-menu" class="md:hidden mt-4 pb-4 hidden">
      <div class="flex flex-col space-y-3">
        <a href="#home" class="text-science-900 hover:text-science-700 py-2 font-medium" onclick="toggleMenu()">Inicio</a>
        <a href="#services" class="text-science-900 hover:text-science-700 py-2 font-medium" onclick="toggleMenu()">Servicios</a>
        <a href="#about" class="text-science-900 hover:text-science-700 py-2 font-medium" onclick="toggleMenu()">Acerca de</a>
        <a href="#testimonials" class="text-science-900 hover:text-science-700 py-2 font-medium" onclick="toggleMenu()">Testimonios</a>
        <a href="#contact" class="text-science-900 hover:text-science-700 py-2 font-medium" onclick="toggleMenu()">Contacto</a>
        <a href="#contact" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-science-600 hover:bg-science-700 text-white px-4 py-2 w-full">Reservar Consulta</a>
      </div>
    </div>
  </div>
</nav>

<script>
  function toggleMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    
    mobileMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  }
</script>
