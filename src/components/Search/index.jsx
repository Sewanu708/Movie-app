import { Fragment, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import SearchSkeleton from "./skeleton";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context";
const token = import.meta.env.VITE_AUTH_TOKEN;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: token,
  },
};
function SearchResults({ keyword }) {
  console.log(keyword);
  
  const navigate = useNavigate();
  async function fetchFn(keyword) {
    const link = `https://api.themoviedb.org/3/search/keyword?query=${keyword}&page=1`;
    try {
      const response = await fetch(link, options);
      console.log(response);
      if (!response.ok) throw new Error(response.statusText);
      const data = await response?.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  const data = useQuery({
    queryKey: ["search", keyword],
    queryFn: () => fetchFn(keyword),
    enabled: keyword.length > 0,
  });
  if (keyword.length < 1) return "";
  if (keyword.length >= 1 && data.isLoading) return <SearchSkeleton />;

  if (data.data?.results.length < 1)
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div>Search Not Found</div>
      </div>
    );

  return (
    <Fragment>
      {data.data?.results.map((result, index) => {
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

export default SearchResults
