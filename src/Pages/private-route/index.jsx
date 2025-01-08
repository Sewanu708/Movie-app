import { useContext } from "react";
import { GlobalContext } from "../../context";
import { Navigate, Outlet } from "react-router-dom";
import HomeSkeleton from "../../components/skeleton/homeSkeleton";
import SideBar from "../../components/sideBar";
import { Fragment } from "react";
function AuthPage() {
  const { currentUser, loading } = useContext(GlobalContext);
  if (loading)
    return (
      <Fragment>
        <SideBar />
        <HomeSkeleton />
      </Fragment>
    );
  if (currentUser) return <Outlet />;
  return <Navigate to={"/login"} />;
}

export default AuthPage;
