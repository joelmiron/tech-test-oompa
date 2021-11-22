import SearchBar from "components/SearchBar/SearchBar";
import { Suspense } from "react";
import { useGetOompas } from "hooks/useGetOompas";
import { useNextPage } from "hooks/useNextPage";
import React, { useEffect, useRef, useState } from "react";
const OompaLoompaMain = React.lazy(() =>import("./components/OompaLoompaMain"));

const MainView = () => {
  const type = "all";
  const api = "https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?page=";
  const [page, setPage] = useState(1);
  const [oompas, setOompas, oompasToFilter] = useGetOompas(page, type, api);
  const elementRef = useRef();
  //custom hook to use Intersection Observer when user scroll to bottom of the page
  const isNextPage = useNextPage(elementRef);

  useEffect(() => {
    if (isNextPage) {
      setPage(page + 1);
      console.log(isNextPage)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isNextPage]);

  

  return (
    <div className="MainContainer">
      <SearchBar setOompas={setOompas} oompasToFilter={oompasToFilter}  />

      <div className="titleMain">
        <div className="title">Find your Oompa Loompa</div>
        <div className="subTitle">There are more than 100k</div>
      </div>

      <div className="oompaLoompasContainer">
        <Suspense fallback={null}>
          {oompas ? (
            oompas.map((oompa) => (
              <OompaLoompaMain
                key={oompa.id}
                id={oompa.id}
                image={oompa.image}
                firstName={oompa.first_name}
                lastName={oompa.last_name}
                gender={oompa.gender}
                profession={oompa.profession}
              />
            ))
          ) : (
            <></>
          )}
        </Suspense>
      </div>
      <div ref={elementRef}></div>
    </div>
  );
};

export default MainView;
