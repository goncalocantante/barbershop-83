const Contact = () => {
  return (
    <section id="contact" class="py-20 bg-dark-lighter">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-primary text-lg font-bold tracking-widest uppercase">Visit Us</h2>
          <h3 class="mt-2 text-3xl leading-8 font-serif font-bold tracking-tight text-white sm:text-4xl">
            Location & Hours
          </h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info & Hours */}
          <div class="bg-dark p-8 border border-white/5 rounded-lg">
            <h4 class="text-2xl font-serif font-bold text-white mb-6">Barber 83</h4>
            
            <div class="space-y-6">
              <div class="flex items-start">
                <svg class="h-6 w-6 text-primary mt-1 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p class="text-gray-300">123 Vintage Ave,</p>
                  <p class="text-gray-300">Lisbon, Portugal 1000-001</p>
                </div>
              </div>

              <div class="flex items-start">
                 <svg class="h-6 w-6 text-primary mt-1 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p class="text-gray-300">+351 21 123 4567</p>
              </div>

              <div class="flex items-start">
                <svg class="h-6 w-6 text-primary mt-1 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div class="w-full">
                  <h5 class="text-white font-bold mb-2">Opening Hours</h5>
                  <div class="grid grid-cols-2 gap-2 text-sm">
                    <span class="text-gray-400">Mon - Fri:</span>
                    <span class="text-white text-right">9:00 AM - 8:00 PM</span>
                    <span class="text-gray-400">Saturday:</span>
                    <span class="text-white text-right">9:00 AM - 6:00 PM</span>
                    <span class="text-gray-400">Sunday:</span>
                    <span class="text-primary text-right">Closed</span>
                  </div>
                </div>
              </div>
            </div>

             <div class="mt-8">
               <a href="mailto:info@barber83.com" class="text-primary hover:text-white transition-colors underline">info@barber83.com</a>
             </div>
          </div>

          {/* Map Placeholder */}
          <div class="h-full w-full min-h-[300px] bg-dark border border-white/5 rounded-lg overflow-hidden relative">
            {/* Actual Google Maps Embed would go here. Using an image for now. */}
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1474&q=80" 
              alt="Map location" 
              class="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span class="bg-dark/80 px-4 py-2 text-white font-bold border border-primary backdrop-blur-sm">View on Map</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
