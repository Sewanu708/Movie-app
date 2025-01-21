import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import search from "/src/assets/search.svg";
import bell from "/src/assets/bell.svg";
import userImage from "/src/assets/freepik__candid-image-photography-natural-textures-highly-r__79590.jpeg";
import logo from "/src/assets/logo.svg";
function TrendingNav({
  user,
  setOpenSideBar,
  openSideBar,
  setSearch,
  searchRef2,
}) {
  const faSidebar = openSideBar ? faClose : faBars;
  const navigate = useNavigate();
  return (
    <Fragment>
      <nav className="w-[90%] lg:w-[70%] h-[100px] bg-[#21201E] flex top-[0] items-center fixed z-[100] justify-between text-white">
        <div className="flex gap-x-[32px] hidden lg:flex  ">
          <div
            id="movies"
            className="font-[500] cursor-pointer transition ease-in duration-100"
            onClick={() => {
              navigate("/Home");
            }}
          >
            Movies
          </div>
          <div
            className="font-[500] cursor-pointer transition ease-in duration-100"
            onClick={() => {
              navigate("/Series");
            }}
          >
            Series
          </div>
          <div className="font-[500] cursor-pointer transition ease-in duration-100">
            Documentaries
          </div>
        </div>
        <div className="cursor-pointer block lg:hidden  ">
          <img
            src={logo}
            alt="Watch Logo"
            className="w-[80px] sm:w-[100px] sm:h-auto md:w-auto "
          />
        </div>
        <div className="flex gap-x-[27px] items-center ">
          <div
            className="cursor-pointer"
            onClick={() => setSearch((prev) => !prev)}
            
          >
            <img src={search} alt="" ref={searchRef2}/>
          </div>
          <FontAwesomeIcon
            icon={faSidebar}
            className="block lg:hidden cursor-pointer"
            onClick={() => setOpenSideBar((prev) => !prev)}
          />

          <div className="hidden  lg:flex">
            <img src={bell} alt="" />
          </div>

          <div className="flex gap-x-[9px] items-center font-400 hidden  lg:flex">
            <div className="w-[32px] h-[32px] ">
              <img src={userImage} alt="" className="rounded-full" />
            </div>

            <div>{user.displayName}</div>
          </div>
        </div>

        {/* <div className="flex gap-x-[27px] hidden  lg:flex"></div> */}
      </nav>
    </Fragment>
  );
}

export default TrendingNav;
