import { API } from "api";
import SearchBar from "components/SearchBar";
import React, { useEffect, useState } from "react";

const axios = require("axios");

const MainView = () => {
  const [page, setPage] = useState(1);
  const [oompas, setOompas] = useState([]);
  const [value,setValue] = useState("")

  useEffect(() => {
    getOompas();
  });

  const getOompas = async () => {
    try {
      const response = await axios.get(API + page);
      setOompas(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };


  const searchValue = () =>{
      
  }

  return (
    <div >
        <SearchBar value={value} searchValue={searchValue}/>
      {oompas &&
        oompas.map((oompa) => <div key={oompa.id}> {oompa.first_name}</div>)}
    </div>
  );
};

export default MainView;
