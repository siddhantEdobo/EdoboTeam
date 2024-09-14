import React from "react";
import Skeleton from "react-loading-skeleton";

function CategorySkeleton() {
  return (
    <div className="container">
      {[...Array(6)].map((value, index) => {
        return (
          <div className="row py-4" key={index}>
            <dv className="my-2">
              <Skeleton width={"30%"} height={"100%"} />
            </dv>

            <div className="col-2">
              <Skeleton width={"100%"} height={"100%"} />
              <Skeleton width={"100%"} height={"20%"} />
            </div>

            <div className="col-2">
              <Skeleton width={"100%"} height={"100%"} />
              <Skeleton width={"100%"} height={"20%"} />
            </div>

            <div className="col-2">
              <Skeleton width={"100%"} height={"100%"} />
              <Skeleton width={"100%"} height={"20%"} />
            </div>
            <div className="col-2">
              <Skeleton width={"100%"} height={"100%"} />
              <Skeleton width={"100%"} height={"20%"} />
            </div>
            <div className="col-2">
              <Skeleton width={"100%"} height={"100%"} />
              <Skeleton width={"100%"} height={"20%"} />
            </div>
            <div className="col-2">
              <Skeleton width={"100%"} height={"100%"} />
              <Skeleton width={"100%"} height={"20%"} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CategorySkeleton;
