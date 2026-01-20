import { useState } from 'preact/hooks';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav class="fixed w-full z-50 bg-dark/95 backdrop-blur-sm border-b border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          <div class="flex-shrink-0">
            <span class="text-2xl font-serif font-bold text-primary">BARBER 83</span>
          </div>
          
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  class="text-gray-300 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#book"
                class="bg-primary hover:bg-primary-hover text-dark font-bold py-2 px-6 rounded-none transition-colors duration-300"
              >
                BOOK NOW
              </a>
            </div>
          </div>

          <div class="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span class="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div class="md:hidden bg-dark border-b border-white/10">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                class="text-gray-300 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#book"
              class="w-full text-center mt-4 bg-primary hover:bg-primary-hover text-dark font-bold py-3 rounded-none block transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              BOOK NOW
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
