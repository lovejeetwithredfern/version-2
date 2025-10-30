import { Users, Heart, Sun, Clock } from 'lucide-react';

export default function Advantage() {
  return (
    <section className="py-24 bg-gradient-to-br from-sage/20 via-cream to-brown/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-6 shadow-md">
              <Heart className="w-4 h-4 text-sage" />
              <span className="text-sm font-quicksand font-semibold text-sage">Why Choose Us</span>
            </div>
            <h2 className="font-fredoka font-bold text-4xl md:text-5xl text-brown mb-6">
              The Redfern Advantage
            </h2>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-sage/20">
            <div className="flex items-start gap-8 mb-8">
              <div className="bg-gradient-to-br from-sage to-sage/80 p-6 rounded-2xl shadow-lg flex-shrink-0">
                <Users className="w-12 h-12 text-white" />
              </div>
              <div>
                <h3 className="font-fredoka font-bold text-2xl text-brown mb-3">
                  Tanya and Todd
                </h3>
                <p className="font-quicksand text-lg text-brown/80 leading-relaxed">
                  Your on hands hosts for your fur babies while they stay with us.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-brown/10 p-3 rounded-xl flex-shrink-0">
                  <Heart className="w-6 h-6 text-brown" />
                </div>
                <p className="font-quicksand text-brown/80 leading-relaxed pt-2">
                  The utmost care and love will be given to your beloved pet while you are away on holiday or doing daycare.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-sage/10 p-3 rounded-xl flex-shrink-0">
                  <Sun className="w-6 h-6 text-sage" />
                </div>
                <p className="font-quicksand text-brown/80 leading-relaxed pt-2">
                  We offer a stimulating environment with the majority of their stay spent outside enjoying the fresh air, socializing and lots of exercise.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brown/10 p-3 rounded-xl flex-shrink-0">
                  <Clock className="w-6 h-6 text-brown" />
                </div>
                <p className="font-quicksand text-brown/80 leading-relaxed pt-2">
                  We offer a clean, fun environment that is fully supervised 24 hours a day.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-sage to-brown rounded-3xl p-12 text-center shadow-2xl">
            <p className="font-fredoka font-bold text-3xl md:text-4xl text-white leading-relaxed">
              Redfern Resort offers a safe, fun, and engaging environment where your pup can socialize, stay active, and enjoy plenty of attention while you're away.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
