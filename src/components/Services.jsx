const Services = () => {
  const services = [
    {
      icon: "💍",
      title: "Wedding Catering",
      description:
        "Make your wedding memorable with delicious food and elegant catering service.",
    },
    {
      icon: "🎂",
      title: "Birthday Parties",
      description:
        "Enjoy tasty food and hassle-free catering for your special birthday celebration.",
    },
    {
      icon: "🏢",
      title: "Corporate Events",
      description:
        "Professional catering solutions for meetings, conferences and corporate events.",
    },
    {
      icon: "🎉",
      title: "Private Parties",
      description:
        "Perfect food and service for house parties, anniversaries and family gatherings.",
    },
    {
      icon: "🪔",
      title: "Puja & Festivals",
      description:
        "Traditional and delicious meals prepared specially for religious occasions.",
    },
    {
      icon: "🍽️",
      title: "Custom Catering",
      description:
        "Choose your own menu and get a catering package designed according to your needs.",
    },
  ];

  return (
    <section id="services" className="bg-[linear-gradient(180deg,#fff8f1_0%,#fffdfb_100%)] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-red-700">
            What We Offer
          </p>

          <h2 className="mb-4 text-3xl font-black text-stone-900 md:text-5xl">
            Our Catering Services
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-stone-700">
            From intimate family gatherings to grand celebrations, we provide delicious
            food and professional catering services for every occasion.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-[2rem] border border-amber-200/80 bg-white p-8 shadow-[0_20px_45px_rgba(120,53,15,0.06)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(120,53,15,0.12)]"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 via-orange-100 to-red-100 text-3xl shadow-inner">
                {service.icon}
              </div>

              <h3 className="mb-3 text-xl font-bold text-stone-900">{service.title}</h3>

              <p className="mb-5 leading-relaxed text-stone-700">{service.description}</p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-semibold text-red-700 transition group-hover:text-red-800"
              >
                Learn More <span aria-hidden="true">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;