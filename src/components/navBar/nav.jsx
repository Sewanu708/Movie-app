import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import search from '/src/assets/search.svg'
import bell from '/src/assets/bell.svg'
import userImage from"/src/assets/freepik__candid-image-photography-natural-textures-highly-r__79590.jpeg"
               
function TrendingNav({ user, setOpenSideBar }) {
  const navigate = useNavigate();
  return (
    <Fragment>
      <nav className="w-full flex items-center justify-between text-white">
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
        <div className="cursor-pointer block lg:hidden">
          <img
            src="\src\assets\logo.svg"
            alt="Watch Logo"
            className="w-[80px] sm:w-[100px] sm:h-auto md:w-auto "
          />
        </div>
        <FontAwesomeIcon
          icon={faBars}
          className="block lg:hidden cursor-pointer"
          onClick={() => setOpenSideBar((prev) => !prev)}
        />

        <div className="flex gap-x-[27px] hidden  lg:flex">
          <img src={search} alt="" />

          <img src={bell} alt="" />

          <div className="flex gap-x-[9px] items-center font-400">
            <div className="w-[32px] h-[32px] ">
              <img
                src={userImage}
                alt=""
                className="rounded-full"
              />
            </div>

            <div>{user.displayName}</div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default TrendingNav;
