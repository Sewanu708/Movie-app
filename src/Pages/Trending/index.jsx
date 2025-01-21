import { Fragment, useContext, useEffect, useState } from "react";
import TrendingNav from "../../components/navBar/nav";
import { GlobalContext } from "../../context";
import SideBar from "../../components/sideBar";
import Details from "../../components/details";
import Variants from "../../components/skeleton";
import Movies from "../../components/Map";
import { useRef } from "react";
import Search from "../Search";

function TrendingPage() {
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
  } = useContext(GlobalContext);
  const trending = QueriesObject["Trending"][0];

  if (trending.isLoading)
    return (
      <Fragment>
        <SideBar />
        <Variants />
      </Fragment>
    );

  const data = trending?.data?.results;
  const genre = QueriesObject["Trending"][1]?.data?.genres;
  const [selectedMovie, setSelectedMovie] = useState(data[0]);

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
        <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
        <section className="bg-[#21201E] overflow-hidden max-w-[1300px]  px-[16px]  md:px-[32px] py-[32px] ml-0 lg:ml-[280px] ">
          <TrendingNav
            user={currentUser}
            setOpenSideBar={setOpenSideBar}
            openSideBar={openSideBar}
            searchRef2={searchRef2}
            setSearch={setSearch}
          />
          <div className="pt-8">
            <div className="text-white text-[16px] sm:text-[20px] pb-4 font-[500] mt-[40px]">
              Trending at this moment
            </div>
            <div className="w-full h-full flex items-start justify-start gap-x-[23px] overflow-x-scroll overflow-y-hidden">
              {data.map((trend, index) =>
                Movies(
                  trend,
                  index,
                  genre,
                  setFavourites,
                  setSelectedMovie,
                  favourites
                )
              )}
            </div>
          </div>
        </section>

        <Details selectedMovie={selectedMovie} genre={genre} />
      </div>
      <Search searchRef={searchRef} />
    </Fragment>
  );
}
export default TrendingPage;
