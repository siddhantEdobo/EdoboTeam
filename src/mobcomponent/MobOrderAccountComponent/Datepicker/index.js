import React, { useState } from "react";
import ReactHorizontalDatePicker from "react-horizontal-strip-datepicker";
import "react-horizontal-strip-datepicker/dist/ReactHorizontalDatePicker.css";

function Datepicker() {
  const onSelectedDay = (d) => {
    console.log(d);
  };

  return (
    <>
      <div>
        <ReactHorizontalDatePicker
          selectedDay={onSelectedDay}
          enableScroll={true}
          enableDays={7}
          enableDaysBefore={0}
        />
      </div>
    </>
  );
}

export default Datepicker;
