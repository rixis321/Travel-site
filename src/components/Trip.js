import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../../images/image-3.jpg";
import Trip2 from "../../images/image-city1.avif";
import Trip3 from "../../images/image-city2.avif";
function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in France"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab blanditiis deleniti dignissimos, ipsa iusto quis"
        />
        <TripData
          image={Trip2}
          heading="Trip in China"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab blanditiis deleniti dignissimos, ipsa iusto quis"
        />
        <TripData
          image={Trip3}
          heading="Trip in Singapour"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab blanditiis deleniti dignissimos, ipsa iusto quis"
        />
      </div>
    </div>
  );
}

export default Trip;
