const Footer = () => {
  return (
    <footer class="bg-dark-darker py-12 border-t border-white/5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-4 md:mb-0">
            <span class="text-2xl font-serif font-bold text-white">BARBERSHOP<span class="text-primary">83</span></span>
          </div>
          
          <div class="flex space-x-6 text-gray-400 mb-4 md:mb-0">
             <a href="#" class="hover:text-primary transition-colors">Instagram</a>
             <a href="#" class="hover:text-primary transition-colors">Facebook</a>
          </div>

          <div class="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Barbershop 83. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
