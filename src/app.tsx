
import { Hero } from './components/Hero';
import { ServiceMenu } from './components/ServiceMenu';
import { Location } from './components/Location';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Footer } from './components/Footer';

export function App() {
  return (
    <main class="min-h-screen bg-dark-900 text-white font-sans selection:bg-primary-500 selection:text-white">
      <Hero />
      <ServiceMenu />
      <Location />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
