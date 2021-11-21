import { useGetOompas } from "hooks/useGetOompas";
import { useParams } from "react-router";
import { useEffect, useState } from "react/cjs/react.development";

export const OompaLoompaDetail = () => {
  const type = "single";
  let { id } = useParams();
  const api ="https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas/";
  let [oompa] = useGetOompas(id, type, api);
  const [storagedOompaLoompa, setStoragedOompaLoompa] = useState(JSON.parse(window.localStorage.getItem(id + "storagedOompaLoompa")) || [])



  useEffect(() => {

    
    updateStorageItems(oompa)
  }, [oompa]);

  const updateStorageItems = (oompa) =>{
   if(Object.keys(storagedOompaLoompa).length === 0){
    setStoragedOompaLoompa(oompa)
  window.localStorage.setItem(id + "storagedOompaLoompa",JSON.stringify(oompa));
}
   // const newDescription = oompa.description.replace(/(<([^>]+)>)/gi, "");
   // setDescription(newDescription)
  }


  



  return (
    <div className="detail">
      <div className="detailContainer">
        <div className="oompaImage">
          <img src={storagedOompaLoompa.image} alt="OompaImage" />
        </div>
        <div className="oompaDetail">
          <div className="infoSpace">
            <div className="name">
              {storagedOompaLoompa.first_name} {storagedOompaLoompa.last_name}
            </div>
            <div className="gender">
              {storagedOompaLoompa.gender === "F" ? "Female" : "Man"}
            </div>
            <div className="profession">{storagedOompaLoompa.profession}</div>
          </div>

          {/* {description && description} */}
          <br />
        </div>
      </div>
    </div>
  );
};
