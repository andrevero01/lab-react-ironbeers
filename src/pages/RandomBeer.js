import Header from "../components/Header";
import { useState, useEffect } from "react";
import axios from "axios";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState({});
  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        setRandomBeer(response.data);
        console.log(response.data);
      });
  }, []);
  return (
    <>
      <Header />
      <div className="random=beer">
        <img src={randomBeer.image_url} alt="" width={80} />
        <h2>{randomBeer.name}</h2>
        <h3>{randomBeer.tagline}</h3>
        <p>{randomBeer.first_brewed}</p>
        <p>{randomBeer.attenuation_level}</p>
        <p>{randomBeer.description}</p>
        <p>{randomBeer.contributed_by}</p>
      </div>
    </>
  );
}

export default RandomBeer;
