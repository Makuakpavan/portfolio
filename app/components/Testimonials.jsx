const testimonials = [
  {
    name: "Startup Founder",
    text: "Maku is proactive, detail-oriented, and thinks like a product owner. He delivers clean and scalable solutions.",
  },
  {
    name: "Client",
    text: "Great communication and excellent frontend skills. He understood our needs and executed perfectly.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-14">
          What People Say
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-white border hover:shadow-xl transition"
            >
              <p className="text-gray-600 italic mb-4">
                “{t.text}”
              </p>
              <span className="font-semibold">{t.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
