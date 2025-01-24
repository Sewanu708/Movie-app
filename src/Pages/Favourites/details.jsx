import { Fragment, useContext, useEffect, useRef } from "react";
import TrendingNav from "../../components/navBar/nav";
import { GlobalContext } from "../../context";
import SideBar from "../../components/sideBar";
import Details from "../../components/details";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Search from "../Search";
function FavDetails() {
  const { id } = useParams();
  const searchRef = useRef(null);
  const searchRef2 = useRef(null);
  const {
    QueriesObject,
    favourites,
    setFavourites,
    currentUser,
    openSideBar,
    setOpenSideBar,
    setSearch,
    search,
    trackSearch,
    seriesGenre,
    movieGenre,
  } = useContext(GlobalContext);
  const data = QueriesObject['Trending'][0].data.results;
  console.log(data);
  
  const genre = [...seriesGenre.data.genres,...movieGenre.data.genres];
  const selectedMovie = favourites.get(Number(id));
  const navigate = useNavigate();
  console.log(selectedMovie);
  
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify([...favourites]));
  }, [favourites]);

  useEffect(() => {
    const handleClick = (e) => trackSearch(searchRef, e, searchRef2);
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [search]);
  return (
    <Fragment>
      <div
        className="bg-[#21201E] overflow-hidden"
        style={{
          position: search ? "fixed" : "relative",
          filter: search ? "blur(8px)" : "",
        }}
      >
        {" "}
        <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
        <div className="bg-[#21201E] overflow-hidden max-w-[1300px] px-[16px]  md:px-[32px] py-[32px] ml-0 lg:ml-[280px] ">
          <TrendingNav
            user={currentUser}
            setOpenSideBar={setOpenSideBar}
            openSideBar={openSideBar}
            searchRef2={searchRef2}
            setSearch={setSearch}
          />
        </div>
        <div className="pt-8 bg-[#21201E] h-screen mt-4">
          <Details selectedMovie={selectedMovie} genre={genre} />
        </div>
      </div>

      <Search searchRef={searchRef} />
    </Fragment>
  );
}
export default FavDetails;
