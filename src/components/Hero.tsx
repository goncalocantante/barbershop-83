const Hero = () => {
  return (
    <div class="relative bg-dark overflow-hidden min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div class="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80" 
          alt="Barbershop interior" 
          class="w-full h-full object-cover opacity-40"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 pt-20">
        <div class="text-center">
          <h1 class="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl font-serif">
            <span class="block">PREMIUM GROOMING</span>
            <span class="block text-primary mt-2">FOR THE MODERN MAN</span>
          </h1>
          <p class="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Experience the art of traditional barbering combined with modern styling. 
            Detailed cuts, hot towel shaves, and a relaxing atmosphere.
          </p>
          <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
              <a
                href="#book"
                class="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-none text-dark bg-primary hover:bg-primary-hover md:py-4 md:text-lg md:px-10 transition-all duration-300 uppercase tracking-widest"
              >
                Book Appointment
              </a>
              <a
                href="#services"
                class="flex items-center justify-center px-8 py-3 border border-primary text-base font-medium rounded-none text-primary hover:bg-primary/10 md:py-4 md:text-lg md:px-10 transition-all duration-300 uppercase tracking-widest"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
