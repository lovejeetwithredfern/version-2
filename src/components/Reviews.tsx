import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Tracey Nader',
    text: 'Great place! Owners are super friendly and my dog loves it here. Clean and tidy kennels. Very reasonably priced. Would highly recommend',
    rating: 5,
  },
  {
    name: 'Gillian Beggs',
    text: 'My dog jack is a very high energy puppy (husky) and I was so nervous to see how he would do somewhere else other than our home. He absolutely loved Redfern kennels! We had him there for a whole week during the day and he was always excited to go there and was exhausted when he came home. They give the dogs lots of exercise which is great! Highly recommended',
    rating: 5,
  },
  {
    name: 'Matthew Cooper',
    text: 'My grandparents owned this place for many years and sold it to the most recent owners some time ago. They both passed in the last three plus years. I miss this place and am happy it\'s going strong with a great upgraded facility',
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 paw-pattern opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-sage/10 px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4 text-sage fill-sage" />
            <span className="text-sm font-quicksand font-semibold text-sage">Testimonials</span>
          </div>
          <h2 className="font-fredoka font-bold text-4xl md:text-5xl text-brown mb-4">
            What Pet Parents Say
          </h2>
          <p className="font-quicksand text-xl text-brown/70">
            Don't just take our word for it
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-cream to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-sage/10"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-sage fill-sage" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-sage/20" />
              </div>

              <p className="font-quicksand text-brown/80 leading-relaxed mb-6">
                {review.text}
              </p>

              <div className="border-t border-sage/10 pt-4">
                <p className="font-fredoka font-bold text-brown">{review.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
