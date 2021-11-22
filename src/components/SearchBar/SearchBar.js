import iconSearch from "assets/img/ic_search.png";
import { useState } from "react/cjs/react.development";

const SearchBar = ({ setOompas, oompasToFilter }) => {
  const [search, setSearch] = useState("");

  //OnChange evento from searchBar
  const searchValue = (e) => {
    let searchBar = e.target.value;
    setSearch(searchBar);
    loompaSearch(searchBar);
  };

  //search bar filter function
  const loompaSearch = (searchBar) => {
    var loompaResult = oompasToFilter.filter((loompa) => {
      if (
        loompa.first_name
          .toString()
          .toLowerCase()
          .includes(searchBar.toLowerCase()) ||
        loompa.last_name
          .toString()
          .toLowerCase()
          .includes(searchBar.toLowerCase()) ||
        loompa.profession
          .toString()
          .toLowerCase()
          .includes(searchBar.toLowerCase())
      ) {
        return loompa;
      }
      return false;
    });
    setOompas(loompaResult);
  };

  return (
    <div className="searchContainer">
      <div className="searchBar">
        <div className="inputContainer">
          <input placeholder="Search" value={search} onChange={searchValue} />

          <img className="searchImg" alt="searchImg" src={iconSearch} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
