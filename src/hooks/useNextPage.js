import { useState } from "react"
import { useEffect } from "react/cjs/react.development"

export const useNextPage = (elementRef) =>{
   const[isNextPage, setIsNextPage] = useState(false)
    

    useEffect(()=>{
      const observeNextPage = (entries) =>{
  const nextPage = entries[0]
  if(nextPage.isIntersecting){
    console.log("intersection")
   setIsNextPage(true)
  
  }
      }
  
     


  const observer =  new IntersectionObserver(observeNextPage,{rootMargin:'0px'})
      observer.observe(elementRef.current)
  

     
return [isNextPage]


    },[isNextPage])

  


    
  
  }
   