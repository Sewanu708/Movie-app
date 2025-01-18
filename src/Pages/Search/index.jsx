import { Fragment, useState } from "react";
import search from "/src/assets/search.svg";
import userImage from "/src/assets/freepik__candid-image-photography-natural-textures-highly-r__79590.jpeg";
import SearchResults from "../../components/Search";
function Search({ search, searchRef }) {
  const [searchText, setSearchText] = useState("");

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
          <h2 className="pb-2">Results</h2>
          <div className="flex flex-col gap-y-4 w-full">
            {/* <div className="flex gap-x-4 items-start justify-start bg-[#4e4e4e] w-[100%] p-[8px] rounded-lg">
              <div className="w-[44px]">
                <img src={userImage} alt="" className="w-[100%]" />
              </div>
              <div className=" flex flex-col items-start justify-start w-[70%]">
                <p className="font-[600]">The Room Next Door</p>
                <p className="text-[14px] w-[90%] h-[30px] truncate">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Error architecto vitae facilis consequatur placeat? Facere
                  expedita quasi molestias ea aperiam dolore repellat. Ipsam
                  magnam iure velit, eius sit nisi nobis?
                </p>
              </div>
            </div>

            <div className="flex gap-x-4 items-start justify-start bg-[#4e4e4e] w-[100%] p-[8px] rounded-lg">
              <div className="w-[44px]">
                <img src={userImage} alt="" className="w-[100%]" />
              </div>
              <div className=" flex flex-col items-start justify-start w-[70%]">
                <p className="font-[600]">The Room Next Door</p>
                <p className="text-[14px] w-[90%] h-[30px] truncate">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Error architecto vitae facilis consequatur placeat? Facere
                  expedita quasi molestias ea aperiam dolore repellat. Ipsam
                  magnam iure velit, eius sit nisi nobis?
                </p>
              </div>
            </div>

            <div className="flex gap-x-4 items-start justify-start bg-[#4e4e4e] w-[100%] p-[8px] rounded-lg">
              <div className="w-[44px]">
                <img src={userImage} alt="" className="w-[100%]" />
              </div>
              <div className=" flex flex-col items-start justify-start w-[70%]">
                <p className="font-[600]">The Room Next Door</p>
                <p className="text-[14px] w-[90%] h-[30px] truncate">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Error architecto vitae facilis consequatur placeat? Facere
                  expedita quasi molestias ea aperiam dolore repellat. Ipsam
                  magnam iure velit, eius sit nisi nobis?
                </p>
              </div>
            </div>

            <div className="flex gap-x-4 items-start justify-start bg-[#4e4e4e] w-[100%] p-[8px] rounded-lg">
              <div className="w-[44px]">
                <img src={userImage} alt="" className="w-[100%]" />
              </div>
              <div className=" flex flex-col items-start justify-start w-[70%]">
                <p className="font-[600]">The Room Next Door</p>
                <p className="text-[14px] w-[90%] h-[30px] truncate">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Error architecto vitae facilis consequatur placeat? Facere
                  expedita quasi molestias ea aperiam dolore repellat. Ipsam
                  magnam iure velit, eius sit nisi nobis?
                </p>
              </div>
            </div>

            <div className="flex gap-x-4 items-start justify-start bg-[#4e4e4e] w-[100%] p-[8px] rounded-lg">
              <div className="w-[44px]">
                <img src={userImage} alt="" className="w-[100%]" />
              </div>
              <div className=" flex flex-col items-start justify-start w-[70%]">
                <p className="font-[600]">The Room Next Door</p>
                <p className="text-[14px] w-[90%] h-[30px] truncate">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Error architecto vitae facilis consequatur placeat? Facere
                  expedita quasi molestias ea aperiam dolore repellat. Ipsam
                  magnam iure velit, eius sit nisi nobis?
                </p>
              </div>
            </div>

            <div className="flex gap-x-4 items-start justify-start bg-[#4e4e4e] w-[100%] p-[8px] rounded-lg">
              <div className="w-[44px]">
                <img src={userImage} alt="" className="w-[100%]" />
              </div>
              <div className=" flex flex-col items-start justify-start w-[70%]">
                <p className="font-[600]">The Room Next Door</p>
                <p className="text-[14px] w-[90%] h-[30px] truncate">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Error architecto vitae facilis consequatur placeat? Facere
                  expedita quasi molestias ea aperiam dolore repellat. Ipsam
                  magnam iure velit, eius sit nisi nobis?
                </p>
              </div>
            </div> */}

            {search ? <SearchResults keyword={searchText} /> : ""}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Search;
