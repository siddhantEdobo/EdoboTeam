import React from "react";
import Skeleton from "react-loading-skeleton";

function CustomSkeleton({ height, width, duration, count }) {
  return (
    <Skeleton height={height} width={width} duration={duration} count={count} />
  );
}

export default CustomSkeleton;
