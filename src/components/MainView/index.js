import { API } from "api";
import SearchBar from "components/SearchBar";
import React, { useEffect, useState } from "react";
import OompaLoompaMain from "./components/OompaLoompaMain";

const axios = require("axios");

const MainView = () => {
  const [page, setPage] = useState(1);
  const [oompas, setOompas] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    getOompas();
  }, []);

  const getOompas = async () => {
    try {
      const response = await axios.get(API + page);
      setOompas(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const searchValue = () => {};

  return (
    <div className="MainContainer">
      <SearchBar value={value} searchValue={searchValue} />

      <div className="titleMain">
        <div className="title">Find your Oompa Loompa</div>
        <div className="subTitle">There are more than 100k</div>
      </div>

      <div className="oompaLoompasContainer">
        {oompas &&
          oompas.map((oompa) => (
            <OompaLoompaMain
              id={oompa.id}
              image={oompa.image}
              firstName={oompa.first_name}
              lastName={oompa.last_name}
              gender={oompa.gender}
              profession={oompa.profession}
            />
          ))}
      </div>
    </div>
  );
};

export default MainView;
