import SearchBar from "components/SearchBar";
import { useGetOompas } from "hooks/useGetOompas";
import { useLocalStorage } from "hooks/useLocalStorage";
import React, { useEffect, useState } from "react";
import OompaLoompaMain from "./components/OompaLoompaMain";
const moment = require("moment");


const MainView = () => {
  const [search, setSearch] = useState("");
  const actualDateStorage = JSON.parse(window.localStorage.getItem('actualDate'));
  const refreshingDateStorage = JSON.parse( window.localStorage.getItem("refreshingDate"));
  const [oompas,setOompas, oompasToFilter] = useGetOompas(actualDateStorage,refreshingDateStorage,1)
useLocalStorage(actualDateStorage,refreshingDateStorage,oompas,setOompas,oompasToFilter)



  // useEffect(() => {
  //   let actualDate = moment().format("LLL");
  //   window.localStorage.setItem("actualDate", JSON.stringify(actualDate));
  // }, []);



  const searchValue = (e) => {
let searchBar = (e.target.value)
    setSearch(searchBar)
loompaSearch(searchBar)


  };


   const loompaSearch  = (searchBar) =>{

 var loompaResult  = oompasToFilter.filter(loompa => {
   if(loompa.first_name.toString().toLowerCase().includes(searchBar.toLowerCase()) ||
  loompa.last_name.toString().toLowerCase().includes(searchBar.toLowerCase()) ||
   loompa.profession.toString().toLowerCase().includes(searchBar.toLowerCase())
   ){
     return loompa
    }})
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
