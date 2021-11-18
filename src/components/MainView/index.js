import { API } from "api";
import SearchBar from "components/SearchBar";
import React, { useEffect, useState, useRef } from "react";
import OompaLoompaMain from "./components/OompaLoompaMain";

const axios = require("axios");

const MainView = () => {


  const [page, setPage] = useState(1);
  const [oompas, setOompas] = useState([]);
  const [oompasToFilter, setOompasToFilter] = useState([]);
  const [search, setSearch] = useState("ei");
 




  useEffect(() => {
    getOompas();

  }, []);



  const getOompas = async () => {
    try {
      const response = await axios.get(API + page);
      setOompas(response.data.results);
      setOompasToFilter(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const searchValue = (e) => {
let searchBar = (e.target.value)
    setSearch(searchBar)
loompaSearch(searchBar)


  };


   const loompaSearch  = (searchBar) =>{

 var loompaResult  =   oompasToFilter.filter(loompa => {
   if(loompa.first_name.toString().toLowerCase().includes(searchBar.toLowerCase()) ||
  loompa.last_name.toString().toLowerCase().includes(searchBar.toLowerCase()) ||
   loompa.profession.toString().toLowerCase().includes(searchBar.toLowerCase())
   ){
     return loompa
   }
  })

  setOompas(loompaResult)
}









  return (
    <div className="MainContainer">
      <SearchBar search={search} searchValue={searchValue} />

      <div className="titleMain">
        <div className="title">Find your Oompa Loompa</div>
        <div className="subTitle">There are more than 100k</div>
      </div>

      <div className="oompaLoompasContainer"  >
      

      
        {oompas &&
          oompas.map((oompa) => (
           
        
            <OompaLoompaMain   
              key={oompa.id}
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
