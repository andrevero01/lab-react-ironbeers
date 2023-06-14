import Header from "../components/Header";
import { useParams, Link } from "react-router-dom";

function ListBeers(props) {
  return (
    <div>
      <Header />
      {props.beers.map((beer) => (
        <div key={beer._id} className="beer-card">
          <img src={beer.image_url} alt="beer" width={30} />
          <div className="beer-info">
            <Link to={`/beers/${beer._id}`}>
              <h3>{beer.name}</h3>
            </Link>
            <p>{beer.tagline}</p>
            <p>Created by: {beer.contributed_by}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListBeers;
