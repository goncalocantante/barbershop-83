const About = () => {
  return (
    <section id="about" class="py-20 bg-dark relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div class="relative">
            <div class="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1503951914875-452162b7f30a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                alt="Barber working" 
                class="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700" 
              />
            </div>
             {/* Decorative element */}
             <div class="absolute -bottom-10 -right-10 w-40 h-40 border-2 border-primary opacity-20 hidden lg:block"></div>
             <div class="absolute -top-10 -left-10 w-40 h-40 border-2 border-primary opacity-20 hidden lg:block"></div>
          </div>
          
          <div class="mt-12 lg:mt-0">
            <h2 class="text-primary text-lg font-bold tracking-widest uppercase mb-2">Since 1983</h2>
            <h3 class="text-3xl font-serif font-bold text-white sm:text-4xl mb-6">
              More Than Just a Haircut
            </h3>
            <div class="prose prose-lg prose-invert text-gray-400">
              <p class="mb-6">
                Established over 40 years ago, Barber 83 has been a staple in the community for men who value quality grooming. We believe that a haircut is not just a routine, but a ritual.
              </p>
              <p class="mb-6">
                Our shop combines the nostalgia of the classic barbershop with modern techniques and precision. Whether you're looking for a sharp fade, a classic gentleman's cut, or a relaxing hot towel shave, our experienced barbers are here to ensure you leave looking and feeling your best.
              </p>
              <p>
                We take pride in our craft and our atmosphere. Come in, grab a complimentary drink, and relax while we take care of the rest.
              </p>
            </div>
            
            <div class="mt-10 flex gap-4">
               {/* Stats or signatures could go here */}
               <div class="text-center px-6 py-4 border border-white/10 bg-dark-lighter">
                 <span class="block text-3xl font-bold text-white">40+</span>
                 <span class="text-sm text-primary uppercase tracking-wider">Years</span>
               </div>
               <div class="text-center px-6 py-4 border border-white/10 bg-dark-lighter">
                 <span class="block text-3xl font-bold text-white">10k+</span>
                 <span class="text-sm text-primary uppercase tracking-wider">Clients</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
