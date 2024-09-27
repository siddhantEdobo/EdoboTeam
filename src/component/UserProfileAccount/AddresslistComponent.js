import React from "react";

function AddressListComponent() {
  const AddressList = [
    {
      id: 1,
      category: "Home",
      address: "12, ghhj, njkn",
      landmark: "Ramabai Ambedkar Nagar, Ghatkopar East",
      city: "Mumbai",
      pincode: "400075",
      phone: "7307081025",
      backgroundColor: "#D41A25",
      textColor: "#fff",
      isActive: true,
    },
    {
      id: 2,
      category: "Office",
      address: "12, ghhj, njkn",
      landmark: "Ramabai Ambedkar Nagar, Ghatkopar East",
      city: "Mumbai",
      pincode: "400075",
      phone: "7307081025",
    },
    {
      id: 3,
      category: "Others",
      address: "12, ghhj, njkn",
      landmark: "Ramabai Ambedkar Nagar, Ghatkopar East",
      city: "Mumbai",
      pincode: "400075",
      phone: "7307081025",
    },
    {
      id: 4,
      category: "Family and Friends",
      address: "12, ghhj, njkn",
      landmark: "Ramabai Ambedkar Nagar, Ghatkopar East",
      city: "Mumbai",
      pincode: "400075",
      phone: "7307081025",
    },
  ];

  return (
    <>
      <div className="mt-5">
        <div className="row">
          {AddressList.map((address) => (
            <div key={address.id} className="col-6 mb-3">
              <div
                className="card"
                style={{
                  backgroundColor: address.isActive
                    ? address.backgroundColor
                    : "#fff",
                }}
              >
                <div
                  className="card-body"
                  style={{
                    color: address.isActive ? address.textColor : "#000",
                  }}
                >
                  <div className="d-flex justify-content-between ">
                    <h5 className="card-title fs-5 fw-bold">
                      {address.category}
                    </h5>
                    <button className="btn btn-warning">Edit</button>
                  </div>
                  <p
                    className="card-text"
                    style={{
                      backgroundColor: address.isActive
                        ? address.backgroundColor
                        : "#fff",
                    }}
                  >
                    <strong>Address: </strong> {address.address}
                    <br />
                    <strong>Landmark: </strong> {address.landmark}
                    <br />
                    <strong>City: </strong> {address.city}
                    <br />
                    <strong>Pincode: </strong> {address.pincode}
                    <br />
                    <strong>Phone: </strong> {address.phone}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AddressListComponent;
