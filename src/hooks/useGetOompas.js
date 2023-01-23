import { useState, useEffect } from "react";
const moment = require("moment");

//<--------------this custom hook validates if 24h update is needed, updates times in localStorage
// and  returns fetch object from api or localStorage content if exists 

export const useGetOompas = (id, type,api,page) => {
  window.localStorage.setItem("paginaActual", JSON.stringify(page));
  const actualPage = JSON.parse(window.localStorage.getItem("page"));
  const actualDateStorage = JSON.parse(window.localStorage.getItem(type+"actualDate"));
  const refreshingDateStorage = JSON.parse(window.localStorage.getItem(type+"clearDate"));
  const [oompas, setOompas] = useState(type === "all" ? JSON.parse(window.localStorage.getItem("allstoragedOompaLoompas")) || []
                                      : JSON.parse(window.localStorage.getItem(id+"storagedOompaLoompa")) || []);
  const [oompasToFilter, setOompasToFilter] = useState(JSON.parse(window.localStorage.getItem("allstoragedOompaLoompas")) || []);
  //let actualPage = JSON.parse(window.localStorage.getItem("actualPage")) ?  JSON.parse(window.localStorage.getItem("actualPage")) : 1;
  let actualDate = moment().format("LLL");
  let clearDate = moment().add(1, "day").format("LLL");
 //const [idPage, setIdPage] = useState(JSON.parse(window.localStorage.getItem("actualPage")) ?  JSON.parse(window.localStorage.getItem("actualPage")) + 1 : 1)





  useEffect(() => {
    getOompas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
 
    const getOompas = async () => {
    window.localStorage.setItem(type+"actualDate", JSON.stringify(actualDate));
    window.localStorage.setItem(type+"clearDate", JSON.stringify(clearDate)); 



if(type ==="all" ) {
  // window.localStorage.setItem("actualPage", JSON.stringify(idPage));
  // setIdPage((idPage) => idPage + 1)
  setOompas((prevOompas) => prevOompas ? prevOompas.concat(response.data.results) :  response.data.results);
  setOompasToFilter((oompas) => oompas.concat(response.data.results));
   const mergedOompas =  oompas ? oompas.concat(response.data.results) : response.data.results
   window.localStorage.setItem("allstoragedOompaLoompas", JSON.stringify(mergedOompas)); 
 
} 

if(moment(actualDateStorage).isAfter(refreshingDateStorage)){
  localStorage.setItem(type+"clearDate", JSON.stringify(clearDate));  
  localStorage.setItem(type+"actualDate", JSON.stringify(actualDate));
  localStorage.removeItem(id+"storagedOompaLoompa");
  localStorage.removeItem("actualPage");
  //setIdPage(1)
  setOompas([]);
  setOompasToFilter([]);
}


    //data can exists but refresh time is up, then need to clear storage or if data is empty, then fill oompas with the api fetch

        //data type from all Oompa Loompas and single Oompla Loompa is different, returns the proper one
        if(type !== "all"){
          setOompas(response.data);
          //setIdPage((actualId) => actualId + 1)
        }else{
         
        }


    

 
}
 

  return [oompas, oompasToFilter,actualPage];
};
