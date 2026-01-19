

export function WhatsAppButton() {
  const phoneNumber = "351912345678"; // Replace with Pedro's actual number
  const message = "Olá! Gostaria de marcar um corte.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      class="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 flex items-center justify-center group"
      aria-label="Agendar via WhatsApp"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="32" 
        height="32" 
        viewBox="0 0 24 24" 
        fill="currentColor"
        class="w-8 h-8"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-8.683-2.031-.967-.272-.297-.471-.446-.646-.446-.175 0-.397 0-.644.074.149 1.785 4.192 1.983 4.49.198.297.669 1.488.942 1.984.272.496.099 1.041-.025 1.488-.124.446-1.115 1.289-1.636 1.339-.52.05-1.588-.099-3.218-1.041-1.289-.744-2.133-2.083-2.232-2.232-.099-.149-5.124.967-1.165 2.133 1.165 1.438.397 2.232.174 2.455.223 2.133.471 2.753.669.57.198.868.124 1.14.074.272-.05.52-.074.693-.074.174 0 .347.05.471.223.124.174.471 1.761.471 1.761s.149.322-.05.744c-.198.421-1.091 2.308-1.115 2.605-.025.297.025.645.198 1.066.372 1.016 1.636 2.057 3.536 2.057.297 0 .545-.05.744-.124 3.766-1.933 6.195-6.039 6.195-10.413 0-5.789-4.708-10.498-10.496-10.498z"/>
      </svg>
      <span class="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap ml-0 group-hover:ml-3">
        Agendar
      </span>
    </a>
  );
}
