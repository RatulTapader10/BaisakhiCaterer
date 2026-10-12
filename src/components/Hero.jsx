const Hero = () => {
  const highlights = [
    "Fresh ingredients",
    "Custom menus",
    "Warm, reliable service",
  ];

  const stats = [
    { value: "150+", label: "Events served" },
    { value: "4.9/5", label: "Client rating" },
    { value: "12 yrs", label: "Catering experience" },
  ];

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[92vh] items-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=2200&q=90')",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.20),transparent_30%),linear-gradient(90deg,rgba(0,0,0,0.92),rgba(0,0,0,0.78),rgba(0,0,0,0.35))]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.3fr_0.7fr] lg:py-28">
        <div className="max-w-4xl text-white">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-yellow-300/40 bg-black/30 px-5 py-2.5 text-sm font-semibold text-yellow-300 shadow-lg shadow-yellow-500/10 backdrop-blur-sm sm:text-base">
            <span aria-hidden="true">✦</span>
            Baisakhi Caterer · Making moments memorable
          </div>

          <h1 className="luxury-title mb-7 text-5xl font-black leading-[0.9] tracking-[-0.04em] text-white sm:text-6xl lg:text-[5.2rem]">
            Great Food.
            <span className="mt-2 block bg-gradient-to-r from-yellow-300 via-amber-200 to-orange-300 bg-clip-text text-transparent">
              Beautiful
            </span>
            Celebrations.
          </h1>

          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-gray-200 sm:text-xl lg:text-2xl">
            From intimate family gatherings to grand weddings, we craft flavorful
            menus and flawless service for every special occasion.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-700 via-red-600 to-orange-500 px-8 py-4 text-lg font-bold text-white shadow-[0_18px_40px_rgba(220,38,38,0.45)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(220,38,38,0.55)]"
            >
              Book Your Event <span aria-hidden="true">→</span>
            </a>
            <a
              href="/menu"
              className="inline-flex items-center gap-2 rounded-xl border border-white/60 bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-gray-900"
            >
              Explore Our Menu
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/20 pt-7 text-sm font-medium text-gray-100 sm:text-base">
            {highlights.map((item) => (
              <span key={item} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-sm">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400/20 text-yellow-300">
                  ✓
                </span>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative hidden justify-end lg:flex">
          <div className="relative max-w-md rounded-[2rem] border border-white/20 bg-white/10 p-6 text-white shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            <div className="float-soft absolute -left-5 top-12 rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-sm font-semibold text-yellow-200 shadow-lg backdrop-blur-sm">
              Wedding menu
            </div>
              <div className="float-soft absolute -right-4 bottom-10 rounded-2xl border border-yellow-300/30 bg-yellow-400/15 px-4 py-3 text-sm font-semibold text-yellow-100 shadow-lg backdrop-blur-sm">
              150+ events
            </div>

              <div className="soft-card rounded-[1.5rem] border border-white/15 bg-black/40 p-6 shadow-2xl">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-yellow-300">
                    Taste & tradition
                  </p>
                  <p className="mt-2 text-3xl font-black text-white">Baisakhi</p>
                </div>
                <div className="rounded-full border border-yellow-300/40 bg-yellow-400/10 px-3 py-1 text-sm font-bold text-yellow-200">
                  4.9 ★
                </div>
              </div>

              <p className="text-xl font-semibold leading-snug text-gray-100">
                One memorable meal can bring everyone together.
              </p>

              <div className="mt-6 h-1.5 w-20 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400" />

              <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-3"
                  >
                    <div className="text-xl font-black text-white">{stat.value}</div>
                    <div className="mt-1 text-xs text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;