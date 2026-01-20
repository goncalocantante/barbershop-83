const Services = () => {
  const services = [
    { name: "Classic Haircut", price: "$35", description: "Consultation, cut, rinse, and style." },
    { name: "Skin Fade", price: "$40", description: "Precision fade with razor finish." },
    { name: "Beard Trim", price: "$25", description: "Beard sculpting with clippers and scissors." },
    { name: "Hot Towel Shave", price: "$45", description: "Traditional straight razor shave with hot towel treatment." },
    { name: "The Executive", price: "$75", description: "Haircut, beard trim, and hot towel shave package." },
    { name: "Father & Son", price: "$60", description: "Classic cuts for both generations." },
  ];

  return (
    <section id="services" class="py-20 bg-dark-lighter">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-primary text-lg font-bold tracking-widest uppercase">Our Menu</h2>
          <h3 class="mt-2 text-3xl leading-8 font-serif font-bold tracking-tight text-white sm:text-4xl">
            Services & Pricing
          </h3>
          <p class="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            Top-tier grooming services tailored to your style.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service) => (
            <div key={service.name} class="relative bg-dark p-6 border border-white/5 hover:border-primary/30 transition-colors duration-300 group">
              <div class="flex justify-between items-baseline mb-2">
                <h4 class="text-xl font-bold text-white group-hover:text-primary transition-colors">{service.name}</h4>
                <span class="text-xl font-serif text-primary">{service.price}</span>
              </div>
              <p class="text-gray-400 text-sm">{service.description}</p>
              <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        <div class="mt-16 text-center">
          <a
            href="#book"
            class="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-dark font-bold py-3 px-8 transition-colors duration-300 uppercase tracking-wider"
          >
            Book Full Service
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
