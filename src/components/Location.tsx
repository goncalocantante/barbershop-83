

export function Location() {
  return (
    <section id="location" class="py-20 bg-dark-900">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row gap-12 items-center max-w-6xl mx-auto">
          
          <div class="w-full md:w-1/2 space-y-6">
            <h2 class="text-4xl font-bold text-white font-serif mb-6">Localização</h2>
            <div class="space-y-4 text-gray-300 text-lg">
              <p class="flex items-start gap-3">
                <span class="text-primary-500 font-bold">📍</span>
                <span>Alcântara, Lisboa<br/>Rua de Alcântara 83</span>
              </p>
              <p class="flex items-center gap-3">
                <span class="text-primary-500 font-bold">📞</span>
                <span>+351 912 345 678</span>
              </p>
              <p class="flex items-center gap-3">
                <span class="text-primary-500 font-bold">🕒</span>
                <span>Seg - Sáb: 10:00 - 20:00</span>
              </p>
            </div>
            <a 
              href="https://maps.google.com/?q=Barbershop+83+Alcantara" 
              target="_blank"
              class="inline-block mt-6 text-primary-400 hover:text-primary-300 underline decoration-primary-500/30 underline-offset-4"
            >
              Ver no Google Maps →
            </a>
          </div>

          <div class="w-full md:w-1/2 h-80 bg-dark-800 rounded-2xl overflow-hidden shadow-xl border border-white/10 relative">
             {/* Replace with actual map embed if API key available, otherwise linking image or static map */}
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12455.576572579062!2d-9.183333!3d38.706136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1934b17a1e27a9%3A0x4c2f82c2194b620!2sAlc%C3%A2ntara%2C%20Lisboa!5e0!3m2!1sen!2spt!4v1620000000000!5m2!1sen!2spt" 
               width="100%" 
               height="100%" 
               style="border:0;" 
               allowFullScreen={false} 
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
               class="grayscale hover:grayscale-0 transition-all duration-700"
             ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
