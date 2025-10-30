import { Trees, Home, Footprints, Building2 } from 'lucide-react';

const features = [
  {
    icon: Building2,
    title: 'New',
    subtitle: 'State of the art, fully heated and air conditioned facility',
    color: 'bg-sage',
  },
  {
    icon: Trees,
    title: '2.5 Lush Acres',
    subtitle: 'Fully fenced and perfect for dogs of all ages and sizes',
    color: 'bg-brown',
  },
  {
    icon: Footprints,
    title: 'Leash Walks',
    subtitle: 'Over 200 acres worth of private trails for endless canine adventures',
    color: 'bg-sage',
  },
  {
    icon: Home,
    title: 'Private Rooms',
    subtitle: 'A puppy paradise away from home with 24 hour supervision',
    color: 'bg-brown',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-cream relative overflow-hidden">
      <div className="absolute inset-0 paw-pattern opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-sage/20"
            >
              <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-fredoka font-bold text-2xl text-brown mb-3">
                {feature.title}
              </h3>
              <p className="font-quicksand text-brown/70 leading-relaxed">
                {feature.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
