import { useState, useEffect } from "react";
const axios = require("axios");
const moment = require("moment");

export const useGetOompas = (id, type,api) => {


const customApi=api+id
  const actualDateStorage = JSON.parse(window.localStorage.getItem(type+"actualDate"));
  const refreshingDateStorage = JSON.parse(window.localStorage.getItem(type+"clearDate"));
  const [oompas, setOompas] = useState(type === "all" ? JSON.parse(window.localStorage.getItem("allstoragedOompaLoompas")) || [] : []);
  const [oompasToFilter, setOompasToFilter] = useState([]);
 
  useEffect(() => {
    getOompas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getOompas = async () => {
    var actualDate = moment().format("LLL");
    var clearDate = moment().add(1, "day").format("LLL");
    window.localStorage.setItem(type+"actualDate", JSON.stringify(actualDate));
    const response = await axios.get(customApi);
    setOompasToFilter(oompas);


    if (oompas.length === 0 || moment(actualDateStorage).isAfter(refreshingDateStorage)) {
      if (moment(actualDateStorage).isAfter(refreshingDateStorage)) {
        localStorage.removeItem(type+"clearDate");
        localStorage.removeItem(type+"actualdate");
        localStorage.removeItem(id+"storagedOompaLoompa");
     
        } 

        if(type === "all"){
          setOompas(response.data.results);
          window.localStorage.setItem(type + "storagedOompaLoompas", JSON.stringify(response.data.results));
        }else{

         
          setOompas(response.data);
          window.localStorage.setItem(id + "storagedOompaLoompa",JSON.stringify(response.data));
        }
       
        window.localStorage.setItem(type+"actualDate", JSON.stringify(actualDate));
        window.localStorage.setItem(type+"clearDate", JSON.stringify(clearDate));
      
    }

}
 

  return [oompas, setOompas, oompasToFilter];
};
