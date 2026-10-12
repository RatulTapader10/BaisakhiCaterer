const Gallery = () => {
  const galleryImages = [
    {
      image:
        "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=80",
      title: "Wedding Catering",
      category: "Wedding",
    },
    {
      image:
        "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1000&q=80",
      title: "Delicious Food",
      category: "Food",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=80",
      title: "Beautiful Events",
      category: "Events",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=80",
      title: "Special Celebrations",
      category: "Celebration",
    },
    {
      image:
        "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=80",
      title: "Fresh Food",
      category: "Food",
    },
    {
      image:
        "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1000&q=80",
      title: "Catering Setup",
      category: "Catering",
    },
  ];

  return (
    <section id="gallery" className="bg-[linear-gradient(180deg,#fffaf5_0%,#ffffff_100%)] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-red-700">
            Our Gallery
          </p>

          <h2 className="mb-4 text-3xl font-black text-stone-900 md:text-5xl">
            Moments We Have Served
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-stone-700">
            Take a look at some of our delicious food, beautiful events, and memorable
            catering experiences.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((item, index) => (
            <div
              key={index}
              className="group relative h-72 overflow-hidden rounded-[2rem] border border-amber-100 shadow-[0_20px_45px_rgba(120,53,15,0.06)]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 transition duration-500 group-hover:from-black/80" />

              <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center text-white opacity-0 transition duration-500 group-hover:opacity-100">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
                  {item.category}
                </p>
                <h3 className="text-2xl font-bold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-700 via-orange-600 to-amber-400 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5"
          >
            Book Your Event <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;