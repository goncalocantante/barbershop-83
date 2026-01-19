

export function Hero() {
  return (
    <section class="relative h-screen min-h-[600px] flex items-center justify-center text-center px-4 overflow-hidden">
      {/* Background Image Placeholder - Replace with actual barbershop image */}
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center">
        <div class="absolute inset-0 bg-dark-900/80"></div> {/* Overlay */}
      </div>

      <div class="relative z-10 max-w-4xl mx-auto space-y-6">
        <h1 class="text-5xl md:text-7xl font-bold text-primary-500 font-serif tracking-tight">
          Barbershop 83
        </h1>
        <p class="text-xl md:text-2xl text-gray-200 font-light max-w-2xl mx-auto">
          Cortes clássicos, estilo moderno. Onde a tradição encontra a excelência em Alcântara.
        </p>
        <div class="pt-8">
          <a 
            href="#book"
            class="inline-block bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg border-2 border-primary-500"
          >
            Marcar Agora
          </a>
        </div>
      </div>
    </section>
  );
}
