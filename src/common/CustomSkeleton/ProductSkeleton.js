import React from "react";
import Skeleton from "react-loading-skeleton";

function ProductSkeleton() {
 
  return (
    <div className="container">
      {[...Array(6)].map((value, index) => {
        return (
          <div className="row py-4" key={index}>
            <div className="col-3">
              <Skeleton width={"100%"} height={"100%"} />
              <Skeleton width={"100%"} height={"20%"} />
            </div>
            <div className="col-8">
              <Skeleton width={"100%"} height={"10%"} />

              <Skeleton width={"100%"} height={"50%"} />

              <Skeleton width={"30%"} height={"10%"} />
              <Skeleton width={"100%"} height={"10%"} />
              <Skeleton width={"10%"} height={"10%"} />
            </div>
            <div className="col-1">
              <Skeleton width={"100%"} height={"100%"} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductSkeleton;
