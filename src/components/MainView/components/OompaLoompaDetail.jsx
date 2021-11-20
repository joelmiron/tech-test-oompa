import { useGetOompas } from "hooks/useGetOompas";
import { useParams } from "react-router"
import { useEffect } from "react/cjs/react.development";



export const OompaLoompaDetail = () =>{
    const type = "single"
    let {id} = useParams();
    const [oompas, setOompas,oompasToFilter] = useGetOompas(id,type);


    useEffect(() =>{
        window.localStorage.setItem(type+"storagedOompaLoompas", JSON.stringify(oompas));
      },[oompas])
      
return(<div>

{id}


</div>)



}