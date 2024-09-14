import React from "react";

const MobDailyNeedManuButtonComponent = (props) => {
  const { dailyNeedsItems, header } = props;
  return (
    <div>
      <div className="fs-6">{header}</div>
      <div className="d-flex flex-wrap gap-1 justify-content-start mt-1">
        {dailyNeedsItems.map((item, index) => {
          return (
            <div
              key={index}
              className=" mob-search-component-daily-need-items rounded-pill "
            >
              {item?.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobDailyNeedManuButtonComponent;
