import "./DestinationStyles.css";
import DestinationData from "./DestinationData";
import pict1 from "../../images/volcan.jpg";
import pict2 from "../../images/volcan2.jpg";
import pict3 from "../../images/image-7.jpg";
import pict4 from "../../images/image-1.jpg";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours gives you the opportunity to see a lot, within a time frame. </p>

      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
            iusto minima, perferendis perspiciatis quasi quisquam quod sed sit
            ut. Aliquam animi at, commodi, consequuntur eveniet excepturi
            facilis magnam mollitia nam neque numquam reprehenderit sint
            tenetur."
        img1={pict1}
        img2={pict2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Lorem ipsum dolor sit amet."
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
            iusto minima, perferendis perspiciatis quasi quisquam quod sed sit
            ut. Aliquam animi at, commodi, consequuntur eveniet excepturi
            facilis magnam mollitia nam neque numquam reprehenderit sint
            tenetur."
        img1={pict3}
        img2={pict4}
      />
    </div>
  );
};

export default Destination;
