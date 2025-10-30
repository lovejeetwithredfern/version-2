import { Check, Clock, DollarSign, Package, Info } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-cream relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-sage/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-sage/10 px-4 py-2 rounded-full mb-6">
            <DollarSign className="w-4 h-4 text-sage" />
            <span className="text-sm font-quicksand font-semibold text-sage">Pricing</span>
          </div>
          <h2 className="font-fredoka font-bold text-4xl md:text-5xl text-brown mb-4">
            Transparent Pricing
          </h2>
          <p className="font-quicksand text-xl text-brown/70">
            All prices include taxes
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-3xl p-10 shadow-xl border-2 border-sage hover:border-sage/50 transition-all hover:shadow-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-sage/10 p-4 rounded-2xl">
                <Package className="w-8 h-8 text-sage" />
              </div>
              <div>
                <h3 className="font-fredoka font-bold text-3xl text-brown">Boarding</h3>
                <p className="font-quicksand text-brown/60">Overnight stays</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between py-3 border-b border-sage/10">
                <span className="font-quicksand text-brown/80">Per day</span>
                <span className="font-fredoka font-bold text-2xl text-sage">$80.00</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-sage/10">
                <span className="font-quicksand text-brown/80">7 nights</span>
                <span className="font-fredoka font-bold text-2xl text-sage">$560.00</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-sage/10">
                <span className="font-quicksand text-brown/80">14 nights</span>
                <span className="font-fredoka font-bold text-2xl text-sage">$1050.00</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="font-quicksand text-brown/80">Extra dog</span>
                <span className="font-fredoka font-bold text-xl text-brown">$40.00</span>
              </div>
            </div>

            <div className="bg-sage/5 rounded-2xl p-4">
              <p className="font-quicksand text-sm text-brown/70 flex items-start gap-2">
                <Info className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" />
                Ask us about pricing for extended stays
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-xl border-2 border-brown hover:border-brown/50 transition-all hover:shadow-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-brown/10 p-4 rounded-2xl">
                <Clock className="w-8 h-8 text-brown" />
              </div>
              <div>
                <h3 className="font-fredoka font-bold text-3xl text-brown">Daycare</h3>
                <p className="font-quicksand text-brown/60">Daily visits</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between py-3 border-b border-brown/10">
                <span className="font-quicksand text-brown/80">Per day</span>
                <span className="font-fredoka font-bold text-2xl text-brown">$42.00</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="font-quicksand text-brown/80">Second dog</span>
                <span className="font-fredoka font-bold text-xl text-brown">25% off</span>
              </div>
            </div>

            <div className="bg-brown/5 rounded-2xl p-4 space-y-2">
              <p className="font-quicksand text-sm text-brown/70 flex items-center gap-2">
                <Check className="w-4 h-4 text-brown flex-shrink-0" />
                Drop off: 7:00am-9:00am
              </p>
              <p className="font-quicksand text-sm text-brown/70 flex items-center gap-2">
                <Check className="w-4 h-4 text-brown flex-shrink-0" />
                Pick up: 3:00pm-6:00pm
              </p>
              <p className="font-quicksand text-sm text-brown/70 flex items-center gap-2">
                <Check className="w-4 h-4 text-brown flex-shrink-0" />
                Weekend: Drop 8:00am-10:00am
              </p>
              <p className="font-quicksand text-sm text-brown/70 flex items-center gap-2">
                <Check className="w-4 h-4 text-brown flex-shrink-0" />
                Weekend: Pick up 8:00am-5:00pm
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-sage/10 to-brown/10 rounded-3xl p-10 shadow-lg border border-sage/20">
            <h3 className="font-fredoka font-bold text-2xl text-brown mb-6 text-center">
              What to Pack for Your Pup
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-sage rounded-full"></div>
                  <p className="font-quicksand text-brown/80">Bed</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-sage rounded-full"></div>
                  <p className="font-quicksand text-brown/80">Blanket</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-sage rounded-full"></div>
                  <p className="font-quicksand text-brown/80">Favorite toys</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-sage rounded-full"></div>
                  <p className="font-quicksand text-brown/80">Special treats</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brown rounded-full"></div>
                  <p className="font-quicksand text-brown/80">Leash</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brown rounded-full"></div>
                  <p className="font-quicksand text-brown/80">Food & feeding instructions (if needed)</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brown rounded-full"></div>
                  <p className="font-quicksand text-brown/80">Medication instructions ($5.00 per dose)</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-sage/20">
              <h4 className="font-fredoka font-bold text-xl text-brown mb-4">
                Dogs must have proof of:
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-sage" />
                  <p className="font-quicksand text-brown/80">Bordetella vaccination</p>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-sage" />
                  <p className="font-quicksand text-brown/80">Rabies vaccination</p>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-sage" />
                  <p className="font-quicksand text-brown/80">Flea and tick control</p>
                </div>
              </div>
              <p className="font-quicksand text-sm text-brown/60 mt-4 italic">
                Spayed or neutered only (Puppies are exempt)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
