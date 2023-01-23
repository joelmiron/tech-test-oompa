import { useState, useEffect } from "react";
const axios = require("axios");
const moment = require("moment");

//<--------------this custom hook validates if 24h update is needed, updates times in localStorage
// and  returns fetch object from api or localStorage content if exists 

export const useGetOompas = (id, type,api) => {
  const customApi=api+id
  const actualDateStorage = JSON.parse(window.localStorage.getItem(type+"actualDate"));
  const refreshingDateStorage = JSON.parse(window.localStorage.getItem(type+"clearDate"));
  const [oompas, setOompas] = useState(type === "all" ? JSON.parse(window.localStorage.getItem("allstoragedOompaLoompas")) || []
                                      : JSON.parse(window.localStorage.getItem(id+"storagedOompaLoompa")) || []);
  const [oompasToFilter, setOompasToFilter] = useState(JSON.parse(window.localStorage.getItem("allstoragedOompaLoompas")) || []);
  let actualPage = JSON.parse(window.localStorage.getItem("actualPage")) ?  JSON.parse(window.localStorage.getItem("actualPage")) : 1;
  let actualDate = moment().format("LLL");
  let clearDate = moment().add(1, "day").format("LLL");
 const [idPage, setIdPage] = useState(JSON.parse(window.localStorage.getItem("actualPage")) ?  JSON.parse(window.localStorage.getItem("actualPage")) + 1 : 1)
  useEffect(() => {
    getOompas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
 
    const getOompas = async () => {
    window.localStorage.setItem(type+"actualDate", JSON.stringify(actualDate));

if(idPage > actualPage && type ==="all" ) {
  window.localStorage.setItem("actualPage", JSON.stringify(idPage));
  setIdPage((idPage) => idPage + 1)
  const response = await axios.get(customApi);
  setOompas((prevOompas) => prevOompas.concat(response.data.results) );
  setOompasToFilter((oompas) => oompas.concat(response.data.results));
  window.localStorage.setItem(type+"actualDate", JSON.stringify(actualDate));
   window.localStorage.setItem(type+"clearDate", JSON.stringify(clearDate)); 
  const storagedOompas = JSON.parse(window.localStorage.getItem("allstoragedOompaLoompas")); 
   const mergedOompas =  storagedOompas.concat(response.data.results)
   window.localStorage.setItem("allstoragedOompaLoompas", JSON.stringify(mergedOompas)); 
 
} 

if(moment(actualDateStorage).isAfter(refreshingDateStorage)){
  localStorage.removeItem(type+"clearDate");
  localStorage.removeItem(type+"actualdate");
  localStorage.removeItem(id+"storagedOompaLoompa");
  localStorage.removeItem("actualPage");
  setIdPage(1)
  setOompas([]);
  setOompasToFilter([]);
}


    //data can exists but refresh time is up, then need to clear storage or if data is empty, then fill oompas with the api fetch
    if (oompas.length === 0 || moment(actualDateStorage).isAfter(refreshingDateStorage)) {
      const response = await axios.get(customApi);
      //clear storage if time's up
      if (moment(actualDateStorage).isAfter(refreshingDateStorage)) {
        localStorage.removeItem(type+"clearDate");
        localStorage.removeItem(type+"actualdate");
        localStorage.removeItem(id+"storagedOompaLoompa");
        } 

        //data type from all Oompa Loompas and single Oompla Loompa is different, returns the proper one
        if(type === "all"){
        
          setOompas(response.data.results);
          setOompasToFilter(response.data.results);
          window.localStorage.setItem(type + "storagedOompaLoompas", JSON.stringify(response.data.results));
          setIdPage((actualId) => actualId + 1)
        }else{
          setOompas(response.data);
        }

        //set to local Storage actual date and actual date + 24h
        window.localStorage.setItem(type+"actualDate", JSON.stringify(actualDate));
        window.localStorage.setItem(type+"clearDate", JSON.stringify(clearDate));  
    }

 
}
 

  return [oompas, setOompas, oompasToFilter];
};
