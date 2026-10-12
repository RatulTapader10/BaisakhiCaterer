const Reviews = () => {
  const reviews = [
    {
      name: "Rahul Das",
      event: "Wedding Event",
      rating: 5,
      review:
        "The food was absolutely delicious and the service was excellent. Everything was well organized and our guests loved the food.",
    },
    {
      name: "Priya Sharma",
      event: "Birthday Party",
      rating: 5,
      review:
        "Baisakhi Caterer made our birthday celebration stress-free. The food was fresh, tasty and served on time.",
    },
    {
      name: "Amit Roy",
      event: "Corporate Event",
      rating: 5,
      review:
        "Very professional catering service. The team was punctual and the quality of the food was excellent. Highly recommended.",
    },
  ];

  return (
    <section className="bg-[linear-gradient(180deg,#fffaf5_0%,#fff7ed_100%)] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-red-700">
            Customer Reviews
          </p>

          <h2 className="mb-4 text-3xl font-black text-stone-900 md:text-5xl">
            What Our Customers Say
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-stone-700">
            We are proud to make every celebration special. Here is what some of our
            customers have to say.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="rounded-[2rem] border border-amber-200/80 bg-white p-7 shadow-[0_20px_45px_rgba(120,53,15,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(120,53,15,0.12)]"
            >
              <div className="mb-5 flex gap-1">
                {Array.from({ length: review.rating }).map((_, starIndex) => (
                  <span key={starIndex} className="text-xl text-amber-400">
                    ★
                  </span>
                ))}
              </div>

              <div className="mb-5 text-3xl text-amber-200">“</div>
              <p className="mb-6 text-base leading-relaxed text-stone-700">
                {review.review}
              </p>

              <div className="flex items-center gap-4 border-t border-stone-100 pt-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-red-100 to-amber-100 text-lg font-bold text-red-700">
                  {review.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-bold text-stone-900">{review.name}</h3>
                  <p className="text-sm text-stone-500">{review.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;