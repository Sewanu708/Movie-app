import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function HomeSkeleton() {
  return (
    <Stack className="bg-[#21201E]" spacing={1}>
      <div>
        <Skeleton variant="rectangular" height={100} />
        <div>
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" }}
            width={200}
            className="text-white text-[20px] pb-4  font-[500]"
          />

          <div className="flex items-start justify-start gap-x-[20px] overflow-x-scroll overflow-y-hidden ">
            <Skeleton variant="rounded" width={255} height={301} />

            <Skeleton variant="rounded" width={255} height={301} />
            <Skeleton variant="rounded" width={255} height={301} />
            <Skeleton variant="rounded" width={255} height={301} />
          </div>
        </div>
      </div>
    </Stack>
  );
}
