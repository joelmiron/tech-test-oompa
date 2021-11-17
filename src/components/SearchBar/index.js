import iconSearch from "assets/ic_search.png"

const SearchBar= ({value, searchValue}) =>{


  return(<div className="searchContainer">    

<div className="searchBar">
    
    <div className="inputContainer"><input
    placeholder="Search"
value={value}
onChange={searchValue}

/>
        
        
        
    <img  className="searchImg" alt="searchImg" src={iconSearch}/> 
    
    </div>
</div>
       


</div>)  
}

export default SearchBar