import React from "react";

const testimonials = [
  {
    name: "Rahul Sen",
    image: "https://i.pravatar.cc/100?img=3", // replace with real image
    review:
      "Venus Geyser Service was fantastic! They fixed my geyser in no time, and I really appreciate their professional approach.",
  },
  {
    name: "Priya Mukherjee",
    image: "https://i.pravatar.cc/100?img=5",
    review:
      "I am delighted with the service I received from Venus Geyser Service. Their technicians were knowledgeable and very helpful!",
  },
];

export default function CustomerReviews() {
  return (
    <section className="bg-gray-50 py-10 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm font-semibold text-gray-600 tracking-widest alan">
          HAPPY CLIENTS
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-12 big">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-8 flex flex-col items-start text-left hover:shadow-lg transition"
            >
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5 text-yellow-400"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.967c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.951 2.81c-.784.57-1.838-.197-1.539-1.118l1.287-3.967a1 1 0 00-.364-1.118L2.048 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.285-3.967z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed mont">{t.review}</p>

              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="font-semibold text-gray-900">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
