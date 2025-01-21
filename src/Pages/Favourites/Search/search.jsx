import { Fragment, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../../context";

function SearchFavResults({ keyword }) {
  const navigate = useNavigate();
  const { favourites } = useContext(GlobalContext);
  let data = [];
  for (const [keys, element] of favourites) {
    if ((element?.title || element.name).includes(keyword)) {
      data.push(element);
    }
  }
  if (keyword.length < 1) return "";
  if (keyword.length >= 1 && data.length < 1)
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div>Search Not Found</div>
      </div>
    );

  return (
    <Fragment>
      {data.map((result, index) => {
        return (
          <div
            className="flex gap-x-4 items-start justify-start bg-[#4e4e4e] w-[100%] p-[8px] rounded-lg cursor-pointer"
            key={index}
            onClick={() => {
              navigate(`/search/${result.id}`);
            }}
          >
            <div className=" flex flex-col items-start justify-start w-[70%]">
              <p className="font-[600]">{result.name || result.title}</p>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
}
export default SearchFavResults;
