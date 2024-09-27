import React from "react";

function All() {
  const Transitiondata = [
    {
      id: 1,
      addbalanceid: "#1234567890",
      addbalance: 1000,
      orderId: "#1234567899",
      orderbalance: 900,
      updatebalanceid: "",
      updatebalance: 100,
      timedate: new Date(),
    },
    {
      id: 2,
      addbalanceid: "#1234890",
      addbalance: 50,
      orderId: "#1234890",
      orderbalance: 30,
      updatebalanceid: "",
      updatebalance: 20,
      timedate: new Date(),
    },
  ];

  return (
    <>
      <div className="">
        {Transitiondata.length > 0 ? (
          Transitiondata?.map((data) => (
            <div className="card shadow-sm p-2 my-2" key={data.id}>
              <div className="d-flex justify-content-between">
                <div className="fs-13 my-1">
                  {" "}
                  Added Balance {data.addbalanceid}
                </div>
                <div className="text-success fw-bold ">
                  {" "}
                  + ₹{data.addbalance}
                </div>
              </div>

              <div className="d-flex justify-content-between">
                <div className="fs-13 my-1"> Order Id {data.orderId}</div>
                <div className="text-danger fw-bold ">
                  {" "}
                  - ₹{data.orderbalance}
                </div>
              </div>

              <div className="d-flex justify-content-between">
                <div className="fs-13 my-1">
                  {" "}
                  Updated Balance {data.updatebalanceid}
                </div>
                <div className="fw-light "> ₹{data.updatebalance}</div>
              </div>

              <div className="d-flex justify-content-between">
                <div className="text-secondary">
                  {" "}
                  {data.timedate.toDateString()}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-danger fs-3 mt-5">No data Found</div>
        )}
      </div>
    </>
  );
}

export default All;
