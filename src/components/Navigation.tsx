import { Dog } from 'lucide-react';

interface NavigationProps {
  scrolled: boolean;
}

export default function Navigation({ scrolled }: NavigationProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-lg py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
          <div className={`p-2 rounded-full transition-colors ${scrolled ? 'bg-sage' : 'bg-white'}`}>
            <Dog className={`w-6 h-6 ${scrolled ? 'text-white' : 'text-sage'}`} />
          </div>
          <div>
            <div className="font-fredoka font-bold text-xl leading-none">
              <span className="text-sage">Red</span>
              <span className="text-brown">fern</span>
            </div>
            <div className="text-xs font-quicksand text-brown">Dog Resort</div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('about')}
            className="font-quicksand font-medium text-brown hover:text-sage transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('features')}
            className="font-quicksand font-medium text-brown hover:text-sage transition-colors"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection('reviews')}
            className="font-quicksand font-medium text-brown hover:text-sage transition-colors"
          >
            Reviews
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="font-quicksand font-medium text-brown hover:text-sage transition-colors"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-sage text-white px-6 py-2.5 rounded-full font-quicksand font-semibold hover:bg-sage/90 transition-all hover:scale-105 shadow-lg"
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
}
