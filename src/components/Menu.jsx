const Menu = () => {
  const menuItems = [
    {
      category: "Bengali",
      items: [
        {
          name: "Basanti Pulao",
          description: "Aromatic Bengali sweet rice preparation",
          price: "₹120 / plate",
          image:
            "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Mutton Kosha",
          description: "Traditional slow-cooked Bengali mutton curry",
          price: "₹280 / plate",
          image:
            "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Fish Curry",
          description: "Classic Bengali fish curry with aromatic spices",
          price: "₹180 / plate",
          image:
            "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
        },
      ],
    },
    {
      category: "Starters",
      items: [
        {
          name: "Paneer Tikka",
          description: "Grilled paneer with vegetables and spices",
          price: "₹150 / plate",
          image:
            "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Chicken Tikka",
          description: "Juicy grilled chicken marinated in spices",
          price: "₹220 / plate",
          image:
            "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Crispy Chicken",
          description: "Crispy fried chicken with special seasoning",
          price: "₹200 / plate",
          image:
            "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80",
        },
      ],
    },
    {
      category: "Desserts",
      items: [
        {
          name: "Rasgulla",
          description: "Soft Bengali cottage cheese dumplings in syrup",
          price: "₹60 / plate",
          image:
            "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Gulab Jamun",
          description: "Soft milk-solid dumplings soaked in sweet syrup",
          price: "₹70 / plate",
          image:
            "https://images.unsplash.com/photo-1666190094767-0a3c5e2d4d5d?auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Mishti Doi",
          description: "Traditional Bengali sweet yogurt",
          price: "₹80 / plate",
          image:
            "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
        },
      ],
    },
  ];

  return (
    <section id="menu" className="bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.08),transparent_30%),linear-gradient(180deg,#fffaf5_0%,#fff7ed_100%)] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-red-700">
            Our Special Menu
          </p>

          <h2 className="mb-4 text-3xl font-black text-stone-900 md:text-5xl">
            Delicious Food For Every Occasion
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-stone-700">
            Choose from our carefully prepared selection of Bengali, Indian, and
            traditional dishes.
          </p>
        </div>

        {menuItems.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-14">
            <div className="mb-6 flex items-center justify-between gap-4">
              <h3 className="text-2xl font-black text-stone-900 md:text-3xl">
                {category.category}
              </h3>
              <span className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-700">
                Featured
              </span>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="group overflow-hidden rounded-[2rem] border border-amber-100 bg-white shadow-[0_20px_45px_rgba(120,53,15,0.06)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(120,53,15,0.12)]"
                >
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-5">
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <h4 className="text-xl font-bold text-stone-900">{item.name}</h4>
                      <span className="text-sm font-bold text-red-700">{item.price}</span>
                    </div>

                    <p className="text-sm leading-relaxed text-stone-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-700 via-orange-600 to-amber-400 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5"
          >
            Get Full Menu & Pricing <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;