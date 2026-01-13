const services = [
  "Business websites & landing pages",
  "Custom web applications & dashboards",
  "Full SaaS platforms",
  "AI-powered tools & integrations",
  "Performance & SEO optimization",
  "Frontend architecture & UI systems",
];

export default function Services() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          What I Can Build For You
        </h2>

        <div className="grid md:grid-cols-2 gap-6 text-left">
          {services.map((service) => (
            <div
              key={service}
              className="p-6 rounded-2xl border bg-white hover:shadow-lg transition"
            >
              {service}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
