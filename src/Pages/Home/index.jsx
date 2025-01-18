// import { Fragment } from "react";
import SideBar from "../../components/sideBar";
import NavBar from "../../components/navBar";
import Trending from "../../components/Trending Movies";
import { Fragment, useContext, useEffect, useRef, useState } from "react";
import { GlobalContext } from "../../context";
import HomeSkeleton from "../../components/skeleton/homeSkeleton";
import Search from "../Search";
function Home() {
  const [search, setSearch] = useState(false);
  const searchRef = useRef(null);
  const searchRef2 = useRef(null)
  const {
    QueriesObject,
    setFavourites,
    favourites,
    currentUser,
    openSideBar,
    setOpenSideBar,
  } = useContext(GlobalContext);
  const trending = QueriesObject["Trending"][0];
  const genre = QueriesObject["Trending"][1];
  
  if (trending.isLoading)
    return (
      <Fragment>
        <SideBar />
        <HomeSkeleton />
      </Fragment>
    );

  const trackSearch = (ref, event) => {
    // console.log('target equality',event.target===searchRef2.current);
    // console.log('ref contains',ref.current.contains(event.target));
    
    if (search && (!(ref.current.contains(event.target))) && (!(event.target===searchRef2.current))) {
      setSearch(false);
      console.log('Hello');
      
    }
  };
  useEffect(() => {
    const handleClick = (e)=> trackSearch(searchRef, e)
    window.addEventListener("click", handleClick);
    return ()=>   window.removeEventListener("click", handleClick);
  }, [search,trackSearch]);

  return (
    <Fragment>
      <div
        className="bg-[#21201E] overflow-hidden"
        style={{
          position: search ? "fixed" : "relative",
          filter: search ? "blur(8px)" : "",
        }}
      >
        <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
        <NavBar
          backdrop={trending?.data.results[7]}
          favourites={favourites}
          genre={genre}
          setFavourites={setFavourites}
          user={currentUser}
          openSideBar={openSideBar}
          setOpenSideBar={setOpenSideBar}
          setSearch={setSearch}
          searchRef2={searchRef2}
        />
        <Trending text={"Trending"} />
        <Trending text={"Coming Soon"} />
      </div>

      <Search search={search} searchRef={searchRef} />
    </Fragment>
  );
}

export default Home;
