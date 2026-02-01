'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Anushka Joshi',
    title: 'Honors Student at RBS',
    image: '/Images/Rutgers1.png',
    quote:
      "Aniket's work ethic as an educator stood out while teaching skills such as HTML, Javascript, and CSS. Aniket did an exceptional job breaking down complex concepts into understandable bits through the use of real world examples. As a supportive educator, Aniket created a positive learning environment where students felt comfortable asking questions and were not afraid to challenge themselves. Through his role as an educator, Aniket helped develop a great appreciation for Computer Science and the increasing value it has in the world today.",
    rating: 5,
  },
  {
    id: 2,
    name: 'Prof. Alan Belowich',
    title: 'Associate Professor',
    image: '/Images/Rutgers1.png',
    quote:
      "Aniket Anvekar was working as a part-time lecturer for the course Principles of Computer Science during the Fall 2022 semester under my supervision. Aniket's exceptional teaching skills and dedication to student success stood out prominently. His ability to connect with students, create an inclusive learning environment, and provide unwavering support made him one of the best teaching assistants I have worked with during my 20-year tenure at the university. I hold unwavering confidence in Aniket's capacity to not just excel but truly thrive in any role he chooses to embrace.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Sanjyot Desphande',
    title: 'Associate Consultant at TCS',
    image: '/Images/TCS-logo.jpg',
    quote:
      'Aniket Anvekar is an exceptional professional to work with. His proficiency in Python, remarkable problem-solving abilities, and dedication to staying current with emerging technologies greatly elevate our team\'s performance. His collaborative nature and exceptional time management skills make him an invaluable asset to any project.',
    rating: 4.5,
  },
  {
    id: 4,
    name: 'Prof. Shaikh Mohd Ashfaque',
    title: 'Associate Professor',
    image: '/Images/Rizvi-logo.jpeg',
    quote:
      "Aniket's proactive attitude, technical proficiency, and unwavering dedication to learning make him an exceptional candidate. Throughout his undergraduate years, he consistently displayed a deep understanding of complex computer science concepts, excelling in subjects like Data Structures, Algorithms, and Database Systems.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <div key={i}>
        {i < Math.floor(rating) ? (
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ) : i === Math.floor(rating) && rating % 1 !== 0 ? (
          <div className="relative w-4 h-4">
            <Star className="w-4 h-4 text-gray-500" />
            <div className="absolute inset-0 overflow-hidden w-2">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            </div>
          </div>
        ) : (
          <Star className="w-4 h-4 text-gray-500" />
        )}
      </div>
    ));
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">What People Say</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-indigo-950/20 border border-indigo-500/30 rounded-2xl p-6 hover:border-indigo-500/60 hover:bg-indigo-950/30 transition-all"
            >
              {/* Quote Icon */}
              <div className="text-indigo-500 mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-5-7-5-1.002 0-2 .75-2 1.972V11c0 1-1 2-1 2s1 1 1 2v1c0 1-1 2-1 2s1 1 1 2v1c0 1-1 2-1 2s1 1 1 2v1c0 1-.997 2-2 2z" />
                </svg>
              </div>

              {/* Quote Text */}
              <p className="text-black text-sm mb-6 leading-relaxed line-clamp-none font-semibold">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-6 border-t border-indigo-500/30">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-600 flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-black font-semibold text-sm truncate">{testimonial.name}</h4>
                  <p className="text-gray-800 text-xs mb-1 truncate">{testimonial.title}</p>
                  <div className="flex gap-1">{renderStars(testimonial.rating)}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
