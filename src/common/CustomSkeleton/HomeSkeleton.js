import React from "react";
import Skeleton from "react-loading-skeleton";

const HomeSkeleton = () => {
  return (
    <>
      <div className="container">
        <div>
          <Skeleton height={100} width={"100%"} />
        </div>
        <div>
          <Skeleton height={150} width={"100%"} />
        </div>
        <div>
          <Skeleton height={10} width={"40%"} />
        </div>
        <div>
          <Skeleton height={60} width={"100%"} />
        </div>
        <div>
          <Skeleton height={10} width={"25%"} />
        </div>

        {/* <div className="row">
          <div className="col-6 text-center">
            <div className="d-flex flex-column justify-content-center align-items-center h-100">
              <Skeleton height={"50%"} width={"70%"} />
              <Skeleton height={"50%"} width={"100%"} />
            </div>
          </div>
          <div className="col-6 text-center">
            <div className="d-flex flex-column justify-content-center align-items-center h-100">
              <Skeleton height={"50%"} width={"70%"} />
              <Skeleton height={"50%"} width={"100%"} />
            </div>
          </div>
        </div> */}

        <div className="">
          <Skeleton height={10} width={"25%"} />
        </div>
        <div className="row">
          <div className="col">
            <Skeleton className="rounded-5" height={35} width={"100%"} />
          </div>
          <div className="col">
            <Skeleton className="rounded-5" height={35} width={"100%"} />
          </div>
          <div className="col">
            <Skeleton className="rounded-5" height={35} width={"100%"} />
          </div>
          <div className="col">
            <Skeleton className="rounded-5" height={35} width={"100%"} />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Skeleton className="rounded-5 mt-3" height={300} width={"100%"} />
          </div>
          <div className="col">
            <Skeleton className="rounded-5 mt-3" height={300} width={"100%"} />
          </div>
        </div>

        <div className="row">
          <div className="col-8">
            <Skeleton className="rounded-5 mt-3" height={150} width={"100%"} />
          </div>
          <div className="col-4">
            <Skeleton className="rounded-5 mt-3" height={150} width={"100%"} />
          </div>
        </div>

        <div className="mt-3">
          <Skeleton height={10} width={"25%"} />
          <Skeleton height={10} width={"40%"} />
          <Skeleton height={10} width={"60%"} />
        </div>

        <div className="row  pe-1">
          <div className="col-4">
            <Skeleton className="rounded-5 mt-3" height={300} width={"110%"} />
          </div>
          <div className="col-4">
            <Skeleton className="rounded-5 mt-3" height={300} width={"110%"} />
          </div>
          <div className="col-4">
            <Skeleton className="rounded-5 mt-3" height={300} width={"110%"} />
          </div>
        </div>

        <div className="mt-3">
          <Skeleton height={10} width={"25%"} />
        </div>

        <div className="row">
          <div className="col-5">
            <Skeleton className="rounded-5 mt-3" height={300} width={"100%"} />
          </div>
          <div className="col-7">
            <Skeleton className="rounded-5 mt-3" height={85} width={"100%"} />
            <Skeleton className="rounded-5 mt-3" height={85} width={"100%"} />
            <Skeleton className="rounded-5 mt-3" height={85} width={"100%"} />
          </div>
        </div>

        <div className="mt-3">
          <Skeleton height={10} width={"60%"} />
        </div>

        <div className="row">
          <div className="col-6">
            <Skeleton className="rounded-5 mt-3" height={85} width={"100%"} />
            <Skeleton className="rounded-5 mt-3" height={85} width={"100%"} />
            <Skeleton className="rounded-5 mt-3" height={85} width={"100%"} />
          </div>
          <div className="col-6">
            <Skeleton className="rounded-5 mt-3" height={85} width={"100%"} />
            <Skeleton className="rounded-5 mt-3" height={85} width={"100%"} />
            <Skeleton className="rounded-5 mt-3" height={85} width={"100%"} />
          </div>
        </div>

        <div className="mt-3">
          <Skeleton height={10} width={"25%"} />
          <Skeleton height={10} width={"40%"} />
          <Skeleton height={10} width={"60%"} />
        </div>

        <div className="row  pe-1">
          <div className="col-4">
            <Skeleton className="rounded-5 mt-3" height={300} width={"110%"} />
          </div>
          <div className="col-4">
            <Skeleton className="rounded-5 mt-3" height={300} width={"110%"} />
          </div>
          <div className="col-4">
            <Skeleton className="rounded-5 mt-3" height={300} width={"110%"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSkeleton;
