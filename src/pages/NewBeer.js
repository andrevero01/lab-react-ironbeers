import Header from "../components/Header";
import { useState } from "react";
import axios from "axios";

function NewBeer(props) {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleTagline = (e) => setTagline(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleFirstBrewed = (e) => setFirstBrewed(e.target.value);
  const handleBrewersTips = (e) => setBrewersTips(e.target.value);
  const handleAttenuationLevel = (e) => setAttenuationLevel(e.target.value);
  const handleContributedBy = (e) => setContributedBy(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBeer = {
      name,
      tagline,
      description,
      firstBrewed,
      brewersTips,
      attenuationLevel,
      contributedBy,
    };
    console.log(newBeer);
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
      .then((response) => {
        setName("");
        setTagline("");
        setDescription("");
        setFirstBrewed("");
        setBrewersTips("");
        setAttenuationLevel("");
        setContributedBy("");
      });
  };

  return (
    <>
      <Header />
      <div>
        <form className="AddBeer">
          <label>Name: </label>
          <input type="text" name="name" value={name} onChange={handleName} />
          <label>Tagline: </label>
          <input
            type="text"
            name="tagline"
            value={tagline}
            onChange={handleTagline}
          />
          <label>Description: </label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleDescription}
          />
          <label>First Brewed: </label>
          <input
            type="text"
            name="firstBrewed"
            value={firstBrewed}
            onChange={handleFirstBrewed}
          />
          <label>Brewers Tips: </label>
          <input
            type="text"
            name="brewersTips"
            value={brewersTips}
            onChange={handleBrewersTips}
          />
          <label>Attenuation Level: </label>
          <input
            type="text"
            name="attenuationLevel"
            value={attenuationLevel}
            onChange={handleAttenuationLevel}
          />
          <label>Contributed By: </label>
          <input
            type="text"
            name="contributedBy"
            value={contributedBy}
            onChange={handleContributedBy}
          />

          <button type="submit">Add New</button>
        </form>
      </div>
    </>
  );
}

export default NewBeer;
