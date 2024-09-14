import React, { useState } from "react";
import "./MobProfileEditAccount.css";

const MobProfileEditAccount = () => {
  const [editName, setEditName] = useState("");
  const [editMobile, setEditMobile] = useState("");
  const [editEmail, setEditEmail] = useState("");

  return (
    <div>
      <div className="mt-2">
        <div className=" mt-2">
          <div className="fw-bold">NAME</div>

          <div className=" mt-1">
            <input
              type="text"
              className="form-control w-100 h-100 fs-14 p-2"
              placeholder="Enter Receiver's name"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />
          </div>
        </div>

        <div className=" mt-2">
          <div className="fw-bold">MOBILE NUMBER</div>
          <div class="input-group mt-1">
            <input
              type="text"
              class="form-control fs-14 p-2 border-bottom"
              placeholder="Mobile Number"
              //   aria-label="Recipient's username with two button addons"
              value={editMobile}
              onChange={(e) => {
                setEditMobile();
              }}
            />
            <span className=" d-flex gap-2">
              <button
                class="btn border-danger rounded-pill ps-4 pe-4"
                type="button"
              >
                Edit
              </button>
              {false && (
                <>
                  <button class="btn  border-danger rounded-pill" type="button">
                    Varify
                  </button>
                  <button class="btn border-danger rounded-pill" type="button">
                    Cancel
                  </button>
                </>
              )}
            </span>
          </div>
        </div>

        <div className=" mt-2 ">
          <div className="fw-bold">EMAIL ADDRESS</div>

          <div className="mt-1">
            <input
              type="text"
              className="form-control w-100 h-100 fs-14 p-2"
              placeholder="Enter email"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center mt-3">
        <div className="mob-profile-editaccount-update">UPDATE</div>
      </div>
    </div>
  );
};

export default MobProfileEditAccount;
