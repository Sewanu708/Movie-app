import { Fragment, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../../firebaseConfig";
import useSize from "../../hook/useWindowResize";
import favImage from '/src/assets/heart.svg'
import film from '/src/assets/film.svg'
import logo from '/src/assets/logo.svg'
import trendImage from '/src/assets/trending-up.svg'
import calendar from '/src/assets/calendar.svg'
import users from '/src/assets/users.svg'
import settings from '/src/assets/sliders.svg'
import log_out from '/src/assets/log-out.svg'
import social from '/src/assets/message-circle.svg'

function SideBar({ openSideBar, setOpenSideBar }) {
  const sideBarRef = useRef(null);

  const width = useSize();
  function logout() {
    return signOut(auth);
  }

  useEffect(() => {
    if (width <= 1024 && openSideBar) {
      setOpenSideBar(false);
    }
  }, [width]);
  useEffect(() => {
    if (openSideBar) {
      sideBarRef.current.classList.add("open");
      sideBarRef.current.classList.remove("close");
    } else {
      sideBarRef.current.classList.remove("open");
      sideBarRef.current.classList.add("close");
    }
  }, [openSideBar, width]);

  const navigate = useNavigate();
  return (
    <Fragment>
      <div
        className="bg-[#21201E] w-[274px] z-10 left-0 h-screen fixed flex flex-col text-white p-[40px] hidden lg:flex fixed  
       "
        ref={sideBarRef}
      >
        <div className="cursor-pointer mb-[40px]">
          <img src={logo} alt="Watch Logo" />
        </div>

        <div className="flex items-start flex-col gap-y-[24px] mb-[50px]">
          <div
            className="flex gap-x-[8px] items-center justify-center cursor-pointer text-white]"
            onClick={() => {
              navigate("/Home");
            }}
          >
            <img src={film} alt="Home" className="w-[16px] " />
            <div>Home</div>
          </div>

          <div
            className="flex gap-x-[8px] items-center justify-center cursor-pointer text-white]"
            onClick={() => {
              navigate("/Favourites");
            }}
          >
            <img src={favImage} alt="" className="w-[16px] " />
            <div>Favourites</div>
          </div>

          <div
            className="flex gap-x-[8px] items-center justify-center cursor-pointer text-white]"
            onClick={() => {
              navigate("/Trending");
            }}
          >
            <img
              src={trendImage}
              alt=""
              className="w-[16px] "
            />
            <div>Trending</div>
          </div>

          <div
            className="flex gap-x-[8px] items-center justify-center cursor-pointer text-white]"
            onClick={() => {
              navigate("/Soon");
            }}
          >
            <img src={calendar} alt="" className="w-[16px] " />
            <div>Coming soon</div>
          </div>
        </div>

        <div className="flex items-start flex-col gap-y-[24px] mb-[50px]">
          <div className="flex gap-x-[8px] items-center justify-center cursor-pointer text-white]">
            <img src={users} alt="" className="w-[16px] " />
            <div>Community</div>
          </div>

          <div className="flex gap-x-[8px] items-center justify-center cursor-pointer text-white]">
            <img
              src={social}
              alt=""
              className="w-[16px] "
            />
            <div>Social</div>
          </div>
        </div>

        <div className="flex items-start flex-col gap-y-[24px] mb-[50px]">
          <div className="flex gap-x-[8px] items-center justify-center cursor-pointer text-white]">
            <img src={settings} alt="" className="w-[16px] " />
            <div>Settings</div>
          </div>

          <div
            className="flex gap-x-[8px] items-center justify-center cursor-pointer text-white]"
            onClick={logout}
          >
            <img src={log_out} alt="" className="w-[16px] " />
            <div>Logout</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default SideBar;
