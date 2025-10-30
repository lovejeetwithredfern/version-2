import { ArrowRight, Sparkles } from 'lucide-react';
import DogIllustration from './DogIllustration';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-cream via-sage/10 to-cream pt-32 pb-20">
      <div className="absolute inset-0 paw-pattern opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
              <Sparkles className="w-4 h-4 text-sage" />
              <span className="text-sm font-quicksand font-medium text-brown">Since 1972</span>
            </div>

            <h1 className="font-fredoka font-bold text-5xl md:text-7xl leading-tight text-brown">
              Unleash Joy at<br />
              <span className="text-sage">Redfern Resort</span>
            </h1>

            <p className="text-xl font-quicksand text-brown/80 leading-relaxed max-w-xl">
              Doggy Day Care and Boarding Kennel
            </p>

            <p className="text-lg font-quicksand text-brown/70 leading-relaxed max-w-xl">
              At Redfern Resort, we've proudly been a part of the local community since 1972,
              providing a safe and nurturing environment for your beloved dogs.
            </p>

            <button
              onClick={scrollToContact}
              className="group bg-sage text-white px-8 py-4 rounded-full font-quicksand font-semibold text-lg hover:bg-sage/90 transition-all hover:scale-105 shadow-xl flex items-center gap-3"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <DogIllustration />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-sage/20 to-transparent blur-3xl"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
