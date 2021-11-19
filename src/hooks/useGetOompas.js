import { useState,useEffect } from "react";
import { API } from "api";
const axios = require("axios");
const moment = require("moment");


export const useGetOompas = (actualDateStorage,refreshingDateStorage,page) =>{
   
    const [oompas, setOompas] = useState(JSON.parse(window.localStorage.getItem("storagedOompaLoompas")) || []);
    const [oompasToFilter, setOompasToFilter] = useState([]);

   useEffect(() => {
      getOompas();
  
    }, []);
  
  
  
    const getOompas = async () => {
      let actualDate = moment().format("LLL");
  window.localStorage.setItem("actualDate", JSON.stringify(actualDate));
      const response = await axios.get(API + page);

      if(oompas.length === 0 || moment(actualDateStorage).isAfter(refreshingDateStorage)){
      if(moment(actualDateStorage).isAfter(refreshingDateStorage)){
localStorage.clear();



setOompas(response.data.results);
setOompasToFilter(response.data.results);
}else{

  
  setOompas(response.data.results);
  setOompasToFilter(response.data.results);
  let clearDate = moment().add(1, "day").format("LLL")
        window.localStorage.setItem("refreshingDate", JSON.stringify(clearDate));
      
      }

    }

  };


    return [
oompas,
setOompas,
oompasToFilter
    ]
  
  



}