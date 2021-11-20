import { useGetOompas } from "hooks/useGetOompas";
import { useParams } from "react-router";
import { useEffect, useState } from "react/cjs/react.development";

export const OompaLoompaDetail = () => {
  const type = "single";
  let { id } = useParams();
  const api ="https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas/";
  let [oompa] = useGetOompas(id, type, api);

  useEffect(() => {

    
    updateStorageItems(oompa)
  }, [oompa]);

  const updateStorageItems = (oompa) =>{

    

    window.localStorage.setItem(type + "storagedOompaLoompas",JSON.stringify(oompa));

  }



  return (
    <div className="detail">
      <div className="detailContainer">
        <div className="oompaImage">
          <img src={oompa.image} alt="OompaImage" />
        </div>
        <div className="oompaDetail">
          <div className="infoSpace">
            <div className="name">
              {oompa.first_name} {oompa.last_name}
            </div>
            <div className="gender">
              {oompa.gender === "F" ? "Female" : "Man"}
            </div>
            <div className="profession">{oompa.profession}</div>
          </div>

          {oompa.description}
          <br />
        </div>
      </div>
    </div>
  );
};
