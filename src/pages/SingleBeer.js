import Header from "../components/Header";
import { useParams } from "react-router-dom";

function SingleBeer(props) {
  const { id } = useParams();
  console.log("beerId", id);

  const foundBeer = props.beers.find((oneBeer) => {
    return oneBeer._id === id;
  });

  return (
    <>
      <Header />
      {foundBeer && (
        <div className="single-beer">
          <img src={foundBeer.image_url} alt="" width={80} />
          <h2>{foundBeer.name}</h2>
          <h3>{foundBeer.tagline}</h3>
          <p>{foundBeer.first_brewed}</p>
          <p>{foundBeer.attenuation_level}</p>
          <p>{foundBeer.description}</p>
          <p>{foundBeer.contributed_by}</p>
        </div>
      )}
    </>
  );
}

export default SingleBeer;
