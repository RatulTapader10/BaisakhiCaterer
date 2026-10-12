const Footer = () => {
  return (
    <footer className="bg-[#190f0d] text-stone-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="mb-4 text-2xl font-bold text-white">
            Baisakhi <span className="text-amber-300">Caterer</span>
          </h2>

          <p className="mb-5 leading-relaxed text-stone-400">
            Making every occasion special with delicious food, thoughtful planning,
            and quality catering service.
          </p>

          <p className="text-sm text-stone-400">
            Wedding • Birthday • Corporate • Events
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-bold text-white">Quick Links</h3>

          <ul className="space-y-3 text-sm">
            <li>
              <a href="#home" className="transition hover:text-amber-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="transition hover:text-amber-300">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="transition hover:text-amber-300">
                Our Services
              </a>
            </li>
            <li>
              <a href="#menu" className="transition hover:text-amber-300">
                Our Menu
              </a>
            </li>
            <li>
              <a href="#gallery" className="transition hover:text-amber-300">
                Gallery
              </a>
            </li>
            <li>
              <a href="#contact" className="transition hover:text-amber-300">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-bold text-white">Our Services</h3>

          <ul className="space-y-3 text-sm text-stone-300">
            <li>Wedding Catering</li>
            <li>Birthday Parties</li>
            <li>Corporate Events</li>
            <li>Private Parties</li>
            <li>Puja & Festivals</li>
            <li>Custom Catering</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-bold text-white">Get In Touch</h3>

          <div className="space-y-4 text-sm">
            <p>
              <span className="mr-2 text-amber-300">📞</span>
              <a href="tel:+910000000000" className="transition hover:text-amber-300">
                Add your phone number
              </a>
            </p>

            <p>
              <span className="mr-2 text-amber-300">📍</span>
              Add your business location
            </p>

            <p>
              <span className="mr-2 text-amber-300">✉️</span>
              Add your business email
            </p>

            <div className="flex gap-3 pt-3">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-800 font-bold text-white transition hover:bg-red-700"
              >
                IG
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-800 font-bold text-white transition hover:bg-red-700"
              >
                f
              </a>

              <a
                href="[https://wa.me/916289866245?text=Hi,%20I%20would%20like%20to%20connect%20with%20you]!"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-800 font-bold text-white transition hover:bg-red-700"
              >
                WA
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-stone-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-center text-sm text-stone-500 md:flex-row">
          <p>© {new Date().getFullYear()} Baisakhi Caterer. All rights reserved.</p>
          <a href="#home" className="transition hover:text-amber-300">
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;