import React, {useState} from "react";
import useApi from "./useApi";

function Countrydetails() {
  const [country, setCountry] = useState("india");
  const [query, setQuery] = useState("india");

  const { error, loading, data } = useApi(query);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(country);
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter country name"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>


      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>error</p>
      ) : (
        <>
          {data &&
            data.map((i) => (
              <>
                <p key={i.id}>Country : {i.name.common}</p>
                <p key={i.id}>Capital :{i.capital}</p>
                <p key={i.id}>Continent : {i.continents}</p>
                <p key={i.id}>
                  Lattitude and Longitude : {i.latlng[0]},{i.latlng[1]}
                </p>
                <p key={i.id}>Area : {i.area}</p>
                <p key={i.id}>Flag : {i.flag}</p>
                <p key={i.id}>Population : {i.population}</p>
                <p key={i.id}>Timezone : {i.timezones}</p>
              </>
            ))}
        </>
      )}
    </div>
  );
}

export default Countrydetails;
