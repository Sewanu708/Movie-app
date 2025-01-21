import { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TrendingNav from "../../components/navBar/nav";
import { GlobalContext } from "../../context";
import SideBar from "../../components/sideBar";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSearchDetails } from "../../components/ResultDetails/useSearchDetails";
import Details from "../../components/details";
import SearchMoreDetails from "./details";
import Variants from "../../components/skeleton";
const token = import.meta.env.VITE_AUTH_TOKEN;
function SearchDetails() {
  const { id } = useParams();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: token,
    },
  };
  const {
    favourites,
    setFavourites,
    currentUser,
    openSideBar,
    seriesGenre,
    movieGenre,
    setOpenSideBar,
  } = useContext(GlobalContext);

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(true);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify([...favourites]));
  }, [favourites]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await useSearchDetails(id, options);
      console.log(data);

      setData(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);
  if (loading)
    return (
      <div className="h-screen w-full bg-[#21201E] flex items-center justify-center text-white">
        Loading...
      </div>
    );

  console.log(data);

  if (!data?.id)
    return (
      <Fragment>
        <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
        <div className="bg-[#21201E] overflow-hidden max-w-[1300px] px-[16px] h-screen overflow-y-hidden  md:px-[32px] py-[32px] ml-0 lg:ml-[280px] ">
          <TrendingNav user={currentUser} setOpenSideBar={setOpenSideBar} />
          <div className="w-full bg-[#21201E] flex flex-col gap-y-[16px] h-[100%] items-center justify-center text-white">
            Can't retrieve data for this movie
            <Link
              to={"/Home"}
              className="text-[#6100C2] font-[600] text-[16px]"
            >
              Home
            </Link>
          </div>
        </div>
      </Fragment>
    );
  return (
    <Fragment>
      <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
      <div className="bg-[#21201E] overflow-hidden max-w-[1300px] px-[16px]  md:px-[32px] py-[32px] ml-0 lg:ml-[280px] ">
        <TrendingNav user={currentUser} setOpenSideBar={setOpenSideBar} />
      </div>
      <SearchMoreDetails selectedMovie={data} />
    </Fragment>
  );
}
export default SearchDetails;
