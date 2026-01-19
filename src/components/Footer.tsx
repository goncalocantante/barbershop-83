

export function Footer() {
  return (
    <footer class="bg-dark-900 border-t border-white/5 py-8 text-center text-gray-400">
      <div class="container mx-auto px-4">
        <p class="mb-2">&copy; {new Date().getFullYear()} Barbershop 83. Todos os direitos reservados.</p>
        
        {/* Social Links Placeholder */}
        <div class="flex justify-center gap-4 mt-4">
          <a href="#" class="hover:text-primary-500 transition-colors">Instagram</a>
          <a href="#" class="hover:text-primary-500 transition-colors">Facebook</a>
        </div>
      </div>
    </footer>
  );
}
