import { useState } from "react";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guests: "",
    location: "",
    message: "",
  });
  const [error, setError] = useState("");
  const whatsappNumber = "91XXXXXXXXXX";
  const today = new Date();
  const minDate = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000
  )
    .toISOString()
    .split("T")[0];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      setError("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    if (Number(formData.guests) < 1) {
      setError("Number of guests must be at least 1.");
      return;
    }

    if (formData.eventDate < minDate) {
      setError("Please select today or a future event date.");
      return;
    }

    if (!/^\d{10,15}$/.test(whatsappNumber)) {
      setError(
        "Please configure the business WhatsApp number in Booking.jsx first."
      );
      return;
    }

    const message = `
Hello Baisakhi Caterer! I want to enquire about booking.
Name: ${formData.name}
Phone: ${formData.phone}
Event Type: ${formData.eventType}
Event Date: ${formData.eventDate}
Number of Guests: ${formData.guests}
Event Location: ${formData.location || "Not provided"}
Additional Details: ${formData.message || "None"}
Please contact me regarding availability and pricing.
    `.trim();

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  const servicePoints = [
    { icon: "🍽️", title: "Custom Menu", detail: "Menu options tailored to your event." },
    { icon: "🎉", title: "All Types of Events", detail: "Weddings, birthdays, corporate events and more." },
    { icon: "💬", title: "Easy Enquiry", detail: "Send your booking details through WhatsApp." },
  ];

  return (
    <section id="contact" className="bg-[linear-gradient(180deg,#fffaf6_0%,#fff5ee_100%)] px-5 py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-red-700">
            Book Your Event
          </p>
          <h2 className="mb-5 text-3xl font-black leading-tight text-stone-900 sm:text-4xl">
            Let&apos;s Make Your Special Day Delicious!
          </h2>
          <p className="mb-8 text-lg leading-8 text-stone-700">
            Tell us about your event. Share your requirements with us through the booking
            form, and we will discuss your catering needs.
          </p>

          <div className="space-y-5">
            {servicePoints.map((point) => (
              <div
                key={point.title}
                className="flex items-start gap-4 rounded-2xl border border-amber-200/80 bg-white/80 p-4 shadow-sm"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 via-orange-100 to-red-100 text-2xl">
                  {point.icon}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-stone-900">{point.title}</h3>
                  <p className="text-sm text-stone-700">{point.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[2rem] border border-amber-200 bg-white p-6 shadow-[0_25px_60px_rgba(120,53,15,0.08)] sm:p-8"
        >
          <h3 className="mb-6 text-2xl font-black text-gray-900">Booking Enquiry</h3>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block font-medium text-gray-700">
                Full Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                autoComplete="name"
                required
                maxLength={100}
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 outline-none transition focus:border-red-700 focus:bg-white focus:ring-2 focus:ring-red-100"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block font-medium text-gray-700">
                Mobile Number *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="numeric"
                value={formData.phone}
                onChange={handleChange}
                placeholder="10-digit mobile number"
                autoComplete="tel-national"
                pattern="[6-9][0-9]{9}"
                maxLength={10}
                required
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 outline-none transition focus:border-red-700 focus:bg-white focus:ring-2 focus:ring-red-100"
              />
            </div>

            <div>
              <label htmlFor="eventType" className="mb-2 block font-medium text-gray-700">
                Event Type *
              </label>
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 outline-none transition focus:border-red-700 focus:bg-white focus:ring-2 focus:ring-red-100"
              >
                <option value="">Select event</option>
                <option value="Wedding">Wedding</option>
                <option value="Birthday Party">Birthday Party</option>
                <option value="Corporate Event">Corporate Event</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Puja or Festival">Puja or Festival</option>
                <option value="Private Party">Private Party</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="eventDate" className="mb-2 block font-medium text-gray-700">
                Event Date *
              </label>
              <input
                id="eventDate"
                name="eventDate"
                type="date"
                value={formData.eventDate}
                onChange={handleChange}
                min={minDate}
                required
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 outline-none transition focus:border-red-700 focus:bg-white focus:ring-2 focus:ring-red-100"
              />
            </div>

            <div>
              <label htmlFor="guests" className="mb-2 block font-medium text-gray-700">
                Number of Guests *
              </label>
              <input
                id="guests"
                name="guests"
                type="number"
                min="1"
                max="100000"
                value={formData.guests}
                onChange={handleChange}
                placeholder="e.g. 200"
                required
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 outline-none transition focus:border-red-700 focus:bg-white focus:ring-2 focus:ring-red-100"
              />
            </div>

            <div>
              <label htmlFor="location" className="mb-2 block font-medium text-gray-700">
                Event Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter event location"
                maxLength={200}
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 outline-none transition focus:border-red-700 focus:bg-white focus:ring-2 focus:ring-red-100"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="mb-2 block font-medium text-gray-700">
                Additional Requirements
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your menu or other requirements..."
                rows="4"
                maxLength={1000}
                className="w-full resize-y rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 outline-none transition focus:border-red-700 focus:bg-white focus:ring-2 focus:ring-red-100"
              />
            </div>
          </div>

          {error && (
            <p role="alert" className="mt-4 rounded-xl bg-red-50 p-3 text-sm text-red-700">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="mt-6 w-full rounded-xl bg-gradient-to-r from-red-700 via-orange-600 to-amber-400 px-6 py-4 text-base font-bold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5"
          >
            Send Enquiry on WhatsApp
          </button>

          <p className="mt-3 text-center text-xs text-gray-500">
            Your enquiry will open in WhatsApp. You must press Send there to send the
            message.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Booking;