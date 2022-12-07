import "./DestinationStyles.css";
import pict1 from "../../images/volcan.jpg";
import pict2 from "../../images/volcan2.jpg";
import pict3 from "../../images/volcan3.jpg";
import pict4 from "../../images/volcan4.jpg";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours gives you the opportunity to see a lot, within a time frame. </p>

      <div className="first-des">
        <div className="des-text">
          <h2>Taal Volcano, Batangas</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
            iusto minima, perferendis perspiciatis quasi quisquam quod sed sit
            ut. Aliquam animi at, commodi, consequuntur eveniet excepturi
            facilis magnam mollitia nam neque numquam reprehenderit sint
            tenetur.
          </p>
        </div>
        <div className="image">
          <img alt="volcan" src={pict1} />
          <img alt="volcan" src={pict2} />
        </div>
      </div>
    </div>
  );
};

export default Destination;
