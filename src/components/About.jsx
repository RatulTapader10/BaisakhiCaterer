const About = () => {
  const features = [
    "Fresh Ingredients",
    "Hygienic Preparation",
    "Experienced Team",
    "On-Time Service",
  ];

  return (
    <section id="about" className="bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.12),transparent_35%),linear-gradient(180deg,#fffdf9_0%,#fff7ed_100%)] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -left-5 top-8 hidden h-24 w-24 rounded-full bg-yellow-200/80 blur-2xl lg:block" />
            <div className="absolute -right-5 bottom-8 hidden h-24 w-24 rounded-full bg-orange-200/80 blur-2xl lg:block" />

            <img
              src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=80"
              alt="Baisakhi Caterer food service"
              className="h-[450px] w-full rounded-[2rem] border border-amber-200 object-cover shadow-[0_25px_80px_rgba(120,53,15,0.15)]"
            />

            <div className="absolute -bottom-6 right-6 rounded-2xl border border-amber-200 bg-gradient-to-r from-[#3b1d12] to-[#5c2b1f] p-5 text-white shadow-2xl shadow-orange-900/20">
              <p className="text-3xl font-black">10+</p>
              <p className="text-sm text-orange-100">Years Experience</p>
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-red-700">
              About Baisakhi Caterer
            </p>

            <h2 className="mb-6 text-3xl font-black leading-tight text-stone-900 md:text-5xl">
              Delicious Food,
              <span className="block bg-gradient-to-r from-red-700 via-orange-500 to-amber-400 bg-clip-text text-transparent">
                Memorable Moments
              </span>
            </h2>

            <p className="mb-5 text-lg leading-relaxed text-stone-700">
              At Baisakhi Caterer, we believe that great food brings people together.
              We provide delicious, fresh, and hygienically prepared meals for weddings,
              parties, corporate events, and special occasions.
            </p>

            <p className="mb-8 text-lg leading-relaxed text-stone-700">
              From planning the menu to serving your guests, our experienced team takes
              care of every detail so you can enjoy your special day without stress.
            </p>

            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 rounded-2xl border border-amber-100 bg-white/80 p-4 shadow-sm"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-amber-100 to-orange-100 text-lg font-bold text-red-700">
                    ✓
                  </span>
                  <span className="font-medium text-stone-800">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-700 via-orange-600 to-amber-400 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5"
            >
              Plan Your Event <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;