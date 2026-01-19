

interface ServiceItemProps {
  name: string;
  price: string;
}

function ServiceItem({ name, price }: ServiceItemProps) {
  return (
    <div class="flex justify-between items-center py-4 border-b border-dark-700/50 hover:bg-dark-800/50 px-4 rounded-lg transition-colors">
      <span class="text-xl font-medium text-gray-200">{name}</span>
      <span class="text-xl font-bold text-primary-400">{price}</span>
    </div>
  );
}

export function ServiceMenu() {
  const services = [
    { name: "Corte de Cabelo", price: "15€" },
    { name: "Barba (Aparar)", price: "10€" },
    { name: "Barba (Toalha Quente)", price: "15€" },
    { name: "Corte + Barba", price: "25€" },
    { name: "Corte Infantil", price: "12€" },
    { name: "Riscado / Design", price: "+5€" },
  ];

  return (
    <section id="services" class="py-20 bg-dark-800">
      <div class="container mx-auto px-4 max-w-3xl">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-5xl font-bold text-white mb-4 font-serif">Menu & Preços</h2>
          <div class="w-24 h-1 bg-primary-500 mx-auto"></div>
        </div>
        
        <div class="bg-dark-900 rounded-2xl p-6 md:p-8 shadow-2xl border border-white/5">
          {services.map((service) => (
            <ServiceItem key={service.name} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
