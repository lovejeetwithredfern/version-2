import { MapPin, Mail, Phone, Heart } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-sage via-sage/90 to-brown relative overflow-hidden">
      <div className="absolute inset-0 paw-pattern opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Heart className="w-4 h-4 text-white" />
            <span className="text-sm font-quicksand font-semibold text-white">Get In Touch</span>
          </div>
          <h2 className="font-fredoka font-bold text-4xl md:text-6xl text-white mb-6">
            Join Us for Happy Paws and Play!
          </h2>
          <p className="font-quicksand text-xl text-white/90 leading-relaxed">
            Ready to give your furry friend the best care? Contact us today to book their next adventure!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
            <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-fredoka font-bold text-xl text-brown mb-3">Visit Us</h3>
            <p className="font-quicksand text-brown/80 leading-relaxed">
              2813 Lakefield Rd<br />
              Peterborough, ON<br />
              K9J 6X5
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
            <div className="w-16 h-16 bg-brown rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-fredoka font-bold text-xl text-brown mb-3">Call Us</h3>
            <a
              href="tel:705-760-2413"
              className="font-quicksand text-lg text-sage hover:text-sage/80 transition-colors font-semibold"
            >
              705-760-2413
            </a>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
            <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-fredoka font-bold text-xl text-brown mb-3">Email Us</h3>
            <a
              href="mailto:redferndogresort@gmail.com"
              className="font-quicksand text-sage hover:text-sage/80 transition-colors font-semibold break-all"
            >
              redferndogresort@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="font-quicksand text-white/80 text-sm">
            2025 by Redfern Dog Resort. Proudly serving the community since 1972.
          </p>
        </div>
      </div>
    </section>
  );
}
