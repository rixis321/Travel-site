import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../../images/image-6.jpg";
import Footer from "../components/Footer";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Service"
        url="/"
        btnClass="hide"
      />
      <Footer />
    </>
  );
}

export default Service;
