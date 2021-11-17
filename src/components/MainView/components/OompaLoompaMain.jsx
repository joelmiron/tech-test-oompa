import { useEffect, useRef,useState } from "react";



const OompaLoompaMain = ({ id, image, firstName, lastName,gender,profession}) =>{
const [showImage,setShowImage] = useState(false)
const elementRef = useRef()


useEffect(() =>{
const viewChange = (entries) =>{
   const image = entries[0]
   if(image.isIntersecting){
     // setShowImage(true)
     console.log(image.isIntersecting)
   }
}



const observer = new IntersectionObserver(viewChange, {  rootMargin: '100px'});
observer.observe(elementRef.current)

},[])

return(

 <div className="oompaLoompaContent" ref={elementRef} >
   <img alt="OompaImage" src={image} /> 
   <div>
<div className="name">{firstName} {lastName}</div>
<div className="gender">{gender === "F" ? "Female" : "Male"}</div>
<div className="profession">{profession}</div>
</div>
</div>

)


}

export default OompaLoompaMain