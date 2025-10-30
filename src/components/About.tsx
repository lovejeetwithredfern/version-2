import { Heart, Shield, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-sage/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brown/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-sage/10 px-4 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4 text-sage" />
              <span className="text-sm font-quicksand font-semibold text-sage">Our Mission</span>
            </div>
            <h2 className="font-fredoka font-bold text-4xl md:text-5xl text-brown mb-6">
              Making a Difference,<br />One Paw at a Time
            </h2>
          </div>

          <div className="bg-gradient-to-br from-sage/10 via-cream to-brown/10 rounded-3xl p-12 shadow-xl backdrop-blur-sm border border-sage/20">
            <p className="text-xl font-quicksand text-brown/90 leading-relaxed mb-8 text-center">
              Our experienced team is dedicated to ensuring that your furry friends receive the
              love, attention, and care they deserve while you're away.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-fredoka font-bold text-lg text-brown">Spacious Play Areas</h3>
                <p className="font-quicksand text-brown/70 text-sm">
                  With spacious play areas and a variety of engaging activities
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-brown rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-fredoka font-bold text-lg text-brown">Enriching Experience</h3>
                <p className="font-quicksand text-brown/70 text-sm">
                  Every dog enjoys an enriching experience that promotes both socialization and fun
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-fredoka font-bold text-lg text-brown">Happy & Healthy</h3>
                <p className="font-quicksand text-brown/70 text-sm">
                  Trust us to keep your pup happy and healthy during their stay with us
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
