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

    if(oompas.length === 0){

 
      const response = await axios.get(API + page);
      setOompas(response.data.results);
      setOompasToFilter(response.data.results);

    }

if(moment(actualDateStorage).isAfter(refreshingDateStorage)){
  localStorage.clear();
  console.log("tiempo agotado")

}else{

     
        let clearDate = moment().add(1, "day").format("LLL")
        window.localStorage.setItem("storagedOompaLoompas", JSON.stringify(oompas));
        window.localStorage.setItem("refreshingDate", JSON.stringify(clearDate));
        console.log("introduciendo oompas en local storage")
      }

    };


    return [
oompas,
setOompas,
oompasToFilter
    ]
  
  



}