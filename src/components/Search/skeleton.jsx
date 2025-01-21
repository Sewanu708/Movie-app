import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
function SearchSkeleton() {
  return (
    <Stack className=" " spacing={1}>
      <div className="bg-[#2e2e2e] flex items-center  gap-x-4">
        <Skeleton variant="rectangular" height={44} width={44} />

        <div className="flex flex-col gap-y-[5px] items-start justify-center">
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" }}
            className=" w-[100px] sm:w-[200px]"
          />

          <Skeleton
            variant="text"
            sx={{ fontSize: "0.75rem" }}
            className=" w-[200px] sm:w-[400px]"
          />
        </div>
      </div>

      <div className="bg-[#2e2e2e] flex items-center  gap-x-4">
        <Skeleton variant="rectangular" height={44} width={44} />

        <div className="flex flex-col gap-y-[5px] items-start justify-center">
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" }}
            className=" w-[100px] sm:w-[200px]"
          />

          <Skeleton
            variant="text"
            sx={{ fontSize: "0.75rem" }}
            className=" w-[200px] sm:w-[400px]"
          />
        </div>
      </div>

      <div className="bg-[#2e2e2e] flex items-center  gap-x-4">
        <Skeleton variant="rectangular" height={44} width={44} />

        <div className="flex flex-col gap-y-[5px] items-start justify-center">
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" }}
            className=" w-[100px] sm:w-[200px]"
          />

          <Skeleton
            variant="text"
            sx={{ fontSize: "0.75rem" }}
            className=" w-[200px] sm:w-[400px]"
          />
        </div>
      </div>
      <div className="bg-[#2e2e2e] flex items-center  gap-x-4">
        <Skeleton variant="rectangular" height={44} width={44} />

        <div className="flex flex-col gap-y-[5px] items-start justify-center">
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" }}
            className=" w-[100px] sm:w-[200px]"
          />

          <Skeleton
            variant="text"
            sx={{ fontSize: "0.75rem" }}
            className=" w-[200px] sm:w-[400px]"
          />
        </div>
      </div>
      <div className="bg-[#2e2e2e] flex items-center  gap-x-4">
        <Skeleton variant="rectangular" height={44} width={44} />

        <div className="flex flex-col gap-y-[5px] items-start justify-center">
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" }}
            className=" w-[100px] sm:w-[200px]"
          />

          <Skeleton
            variant="text"
            sx={{ fontSize: "0.75rem" }}
            className=" w-[200px] sm:w-[400px]"
          />
        </div>
      </div>
      <div className="bg-[#2e2e2e] flex items-center  gap-x-4">
        <Skeleton variant="rectangular" height={44} width={44} />

        <div className="flex flex-col gap-y-[5px] items-start justify-center">
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" }}
            className=" w-[100px] sm:w-[200px]"
          />

          <Skeleton
            variant="text"
            sx={{ fontSize: "0.75rem" }}
            className=" w-[200px] sm:w-[400px]"
          />
        </div>
      </div>
    </Stack>
  );
}

export default SearchSkeleton;
