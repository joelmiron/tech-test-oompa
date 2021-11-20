import { useGetOompas } from "hooks/useGetOompas";
import { useParams } from "react-router"
import { useEffect } from "react/cjs/react.development";



export const OompaLoompaDetail = () =>{
    const type = "single"
    let {id} = useParams();
    const api= "https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas/"
    const [oompas, setOompas,oompasToFilter] = useGetOompas(id,type,api);


    useEffect(() =>{
        window.localStorage.setItem(type+"storagedOompaLoompas", JSON.stringify(oompas));
      },[oompas])
      
return(<div>

{id}


</div>)



}