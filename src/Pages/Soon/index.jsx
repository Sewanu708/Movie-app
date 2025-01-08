import { Fragment, useContext, useEffect, useState } from "react";
import TrendingNav from "../../components/navBar/nav";
import { GlobalContext } from "../../context";
import SideBar from "../../components/sideBar";
import Details from "../../components/details";
import Variants from "../../components/skeleton";
import Movies from "../../components/Map";

function Soon() {
  const {
    QueriesObject,
    favourites,
    setFavourites,
    currentUser,
    openSideBar,
    setOpenSideBar,
  } = useContext(GlobalContext);
  const soon = QueriesObject["Coming Soon"][0];
  if (soon.isLoading)
    return (
      <Fragment>
        <SideBar />
        <Variants />
      </Fragment>
    );
  const data = soon?.data?.results;
  const genre = QueriesObject["Coming Soon"][1]?.data?.genres;
  const [selectedMovie, setSelectedMovie] = useState(data[0]);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify([...favourites]));
  }, [favourites]);
  return (
    <Fragment>
      <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
      <section className="bg-[#21201E] overflow-hidden max-w-[1300px] px-[16px]  md:px-[32px] py-[32px] ml-0 lg:ml-[280px] ">
        <TrendingNav user={currentUser} setOpenSideBar={setOpenSideBar} />
        <div>
          <div className="text-white text-[16px] sm:text-[20px] pb-4 font-[500] mt-[40px]">
            Coming Soon
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
    </Fragment>
  );
}
export default Soon;
