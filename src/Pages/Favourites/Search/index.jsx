import { useContext, useState } from "react";
import SearchFavResults from "./search";
import { GlobalContext } from "../../../context";
function SearchFav({ searchRef }) {
  const [searchText, setSearchText] = useState("");
  const { search } = useContext(GlobalContext);

  return (
    <section
      className="w-[100vw] flex h-screen items-center justify-center relative"
      style={{ display: search ? "flex" : "none" }}
    >
      <div
        className=" w-[85%] sm:w-[65%] h-[450px]   bg-[#2e2e2e] z-50  text-white rounded-lg flex flex-col items-center justify-start p-4 "
        ref={searchRef}
      >
        <div className="w-[90%] flex h-[45px] bg-[#3a3a3a] justify-center rounded-lg    px-4 border border">
          <input
            type="text"
            placeholder="Search anything here..."
            className="w-full h-[40px] bg-[#3a3a3a]"
            onInput={(e) => setSearchText(e.target.value)}
          />
          <label
            htmlFor=""
            className="flex justify-center items-center cursor-pointer"
          >
            <img src={search} alt="" />
          </label>
        </div>

        <div className="w-full h-full flex mt-[18px]  flex-col px-4 overflow-scroll">
          <h2 className="pb-2">Results from Favourites</h2>
          <div className="flex flex-col gap-y-4 w-full">
            {search ? <SearchFavResults keyword={searchText} /> : ""}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchFav;
