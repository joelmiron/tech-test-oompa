import { useEffect,useState,useRef } from "react";
import { useHistory } from "react-router";



const OompaLoompaMain = ({ id, image, firstName, lastName,gender,profession}) =>{

  //const [showImage,setShowImage] = useState(false)
const elementRef = useRef()
const history=useHistory()
 
useEffect(() =>{

const viewImage = (entries) =>{
  entries.forEach((entry) =>{
    if(entry.isIntersecting){
      //console.log("bien")
      const element = entry.target
      const imageSrc = element.getAttribute('data-src')

      element.setAttribute('src', imageSrc)
    }
  }) 

}

  const observer = new IntersectionObserver(viewImage,{threshold:1})
  observer.observe(elementRef.current)

  
},[])

const loompaDetails = (oompaLoompa) =>{
  history.push("/"+ oompaLoompa)
}

return(

 <div className="oompaLoompaContent"  onClick={() => loompaDetails(id)}>
    
  
 <img alt="OompaImage" className="imagesOompaLoompas" ref={elementRef}  data-src={image} />
   <div>
<div className="name">{firstName} {lastName}</div>
<div className="gender">{gender === "F" ? "Female" : "Male"}</div>
<div className="profession">{profession}</div>
</div>



</div>

)


}

export default OompaLoompaMain