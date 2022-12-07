import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../../images/image-2.jpg";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={AboutImg}
        title="About"
        text="Choose Your Favourite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
    </>
  );
}

export default About;
