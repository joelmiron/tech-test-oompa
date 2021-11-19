import SearchBar from "components/SearchBar";
import { Suspense } from "react";
import { useGetOompas } from "hooks/useGetOompas";
import { useLocalStorage } from "hooks/useLocalStorage";
import { useNextPage } from "hooks/useNextPage";
import React, { useEffect, useRef, useState } from "react";
const  OompaLoompaMain = React.lazy( ()=> import('./components/OompaLoompaMain'));




const MainView = () => {
  const [page,setPage] = useState(1)
  const [search, setSearch] = useState("");
  const actualDateStorage = JSON.parse(window.localStorage.getItem("actualDate"));
  const refreshingDateStorage = JSON.parse(window.localStorage.getItem("refreshingDate"));
  const [oompas, setOompas,oompasToFilter] = useGetOompas(actualDateStorage,refreshingDateStorage,page);
  const elementRef = useRef() 
  const isNextPage = useNextPage(page,setPage,oompas,elementRef)

  //useLocalStorage(actualDateStorage,refreshingDateStorage,oompas,setOompas,oompasToFilter);
  //console.log(isNextPage)


  useEffect(() =>{
if(isNextPage)  {
  setPage(page => page + 1) 
  console.log(page)
}
  },[isNextPage])







  const searchValue = (e) => {
    let searchBar = e.target.value;
    setSearch(searchBar);
    loompaSearch(searchBar);
  };



  const loompaSearch = (searchBar) => {
    var loompaResult = oompasToFilter.filter((loompa) => {
      if (
        loompa.first_name
          .toString()
          .toLowerCase()
          .includes(searchBar.toLowerCase()) ||
        loompa.last_name
          .toString()
          .toLowerCase()
          .includes(searchBar.toLowerCase()) ||
        loompa.profession
          .toString()
          .toLowerCase()
          .includes(searchBar.toLowerCase())
      ) {
        return loompa;
      }
    });
    setOompas(loompaResult);
  };




  return (
    <div className="MainContainer">
      <SearchBar search={search} searchValue={searchValue} />

      <div className="titleMain">
        <div className="title">Find your Oompa Loompa</div>
        <div className="subTitle">There are more than 100k</div>
      </div>

      <div className="oompaLoompasContainer">
        <Suspense fallback={null}>
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
          </Suspense>

<div ref={elementRef}></div>
      </div>

     
    </div>
  );
};

export default MainView;
