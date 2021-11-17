import iconSearch from "assets/img/ic_search.png"

const SearchBar= ({search, searchValue}) =>{


  return(<div className="searchContainer">    

<div className="searchBar">
    
    <div className="inputContainer"><input
    placeholder="Search"
value={search}
onChange={searchValue}

/>
        
        
        
    <img  className="searchImg" alt="searchImg" src={iconSearch}/> 
    
    </div>
</div>
       


</div>)  
}

export default SearchBar