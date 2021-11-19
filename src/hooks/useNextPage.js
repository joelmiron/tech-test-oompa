import { useState } from "react"
import { useEffect } from "react/cjs/react.development"

export const useNextPage = (page,setPage,oompas,elementRef) =>{
    const[isNextPage, setIsNextPage] = useState(false)
    
console.log(elementRef)
    useEffect(()=>{
      const observeNextPage = (entries) =>{
  const nextPage = entries[0]
  if(nextPage.isIntersecting){
    setIsNextPage(true)
  
   // const response = await axios.get(API + page);


  }
      }



  const observer =  new IntersectionObserver(observeNextPage,{rootMargin:'100px'})
      observer.observe(elementRef.current)
  

     
return [isNextPage]


    },[isNextPage])

  


    
  
  }
   