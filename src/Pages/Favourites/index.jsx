import { Fragment, useContext, useRef ,useEffect} from "react";
import { GlobalContext } from "../../context";
import SideBar from "../../components/sideBar";
import TrendingNav from "../../components/navBar/nav";
import { useNavigate } from "react-router-dom";
import FavMore from "./more";
import SearchFav from "./Search";
function Favourites() {
  const searchRef = useRef(null);
  const searchRef2 = useRef(null);
  const {
    seriesGenre,
    movieGenre,
    favourites,
    setFavourites,
    currentUser,
    openSideBar,
    setOpenSideBar,
    setSearch,
    search,
    trackSearch,
  } = useContext(GlobalContext);

  const mGenre = movieGenre.data.genres;
  const sGenre = seriesGenre.data.genres;

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
        <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
        <section
          class="favourites"
          className="bg-[#21201E] overflow-hidden max-w-[1300px] px-[16px]  sm:px-[32px] py-[32px] ml-[0px] lg:ml-[280px]"
        >
          <TrendingNav
            user={currentUser}
            setOpenSideBar={setOpenSideBar}
            openSideBar={openSideBar}
            searchRef2={searchRef2}
            setSearch={setSearch}
          />
          <div
            class="trend-text"
            className="pb-[20px] pt-16  font-[600] text-white"
          >
            Favourites
          </div>
          <div
            class="favs"
            className="w-full min-h-screen grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4  gap-x-[20px] gap-y-[20px]"
          >
            {" "}
            {favourites.size < 1 ? (
              <Fragment>
                <h1></h1>
                <h1 className="text-white flex justify-center items-center">
                  Go like some movies!
                </h1>
              </Fragment>
            ) : (
              [...favourites.entries()].map((fav, index) =>
                FavMore(fav, index, mGenre, sGenre, setFavourites, favourites)
              )
            )}
          </div>
        </section>
      </div>
      <SearchFav searchRef={searchRef} />
    </Fragment>
  );
}
export default Favourites;
