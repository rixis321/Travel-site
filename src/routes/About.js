import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../../images/image-2.jpg";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About"
        url="/"
        btnClass="hide"
      />
      <Footer />
    </>
  );
}

export default About;
