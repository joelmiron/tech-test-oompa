import { useState, useEffect } from "react";
import { API } from "api";
const axios = require("axios");
const moment = require("moment");

export const useGetOompas = (page, type,api) => {


const customApi=api+page
  const actualDateStorage = JSON.parse(window.localStorage.getItem(type+"actualDate"));
  const refreshingDateStorage = JSON.parse(window.localStorage.getItem(type+"clearDate"));
  const [oompas, setOompas] = useState(JSON.parse(window.localStorage.getItem(type+"storagedOompaLoompas")) || []);
  const [oompasToFilter, setOompasToFilter] = useState(JSON.parse(window.localStorage.getItem(type+"storagedOompaLoompas")) || []);

  useEffect(() => {
    getOompas();
  }, []);

  const getOompas = async () => {
    var actualDate = moment().format("LLL");
    var clearDate = moment().add(1, "day").format("LLL");
    window.localStorage.setItem(type+"actualDate", JSON.stringify(actualDate));

    const response = await axios.get(customApi);

    if (oompas.length === 0 || moment(actualDateStorage).isAfter(refreshingDateStorage)) {
      if (moment(actualDateStorage).isAfter(refreshingDateStorage)) {
        localStorage.clear();
        } 

        if(type === "all"){
          setOompas(response.data.results);
          setOompasToFilter(response.data.results);
        }else{
          setOompas(response.data);
        }
       
        window.localStorage.setItem(type+"actualDate", JSON.stringify(actualDate));
        window.localStorage.setItem(type+"clearDate", JSON.stringify(clearDate));
      
      



    }

  }
 

  return [oompas, setOompas, oompasToFilter];
};
