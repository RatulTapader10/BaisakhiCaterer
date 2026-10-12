import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";

  const pages = {
     "/": (
  <>
    <Hero />
     <About />
     <Reviews />,
  </>
),
   
    "/services": <Services />,
    "/menu": <Menu />,
    "/gallery": <Gallery />,
    "/contact": <Booking />,
  };

  const page = pages[path] ?? <Hero />;

  return (
    <>
      <Navbar />
      <main>{page}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;