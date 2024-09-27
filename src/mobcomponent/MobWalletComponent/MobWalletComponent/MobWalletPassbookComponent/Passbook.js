import React from "react";
import passbookicon from "../../../../assets/Icon/passbook.png";

function Passbook() {
  const Passbookdata = [];

  return (
    <>
      <div>
        {Passbookdata.length > 0 ? (
          Passbookdata.map((item) => (
            <div key={item.id}>
              <p>Transaction Type: {item.transactionType}</p>
              <p>Amount: {item.amount}</p>
              <p>Date: {item.date}</p>
            </div>
          ))
        ) : (
          <div className="fs-5 fw-bold text-center mt-5">
            <img
              src={passbookicon}
              alt="passbook icon"
              width={40}
              className="me-2"
            />
            No Transactions yet
          </div>
        )}
      </div>
    </>
  );
}

export default Passbook;
