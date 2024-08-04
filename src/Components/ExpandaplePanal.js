import { useState } from "react";
import { GoChevronDown, GoChevronLeft, GoChevronUp } from "react-icons/go";

export default function ExpnadaplePanal({ header, children }) {
  const [expnaded, setIsExpanded] = useState(false);
  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center ">
        <div className="flex flex-row items-center justify-between ">
          {header}
        </div>
        <div
        className=" cursor-pointer"
          onClick={() => {
            setIsExpanded(!expnaded);
          }}
        >
          {expnaded ? (
            <GoChevronDown></GoChevronDown>
          ) : (
            <GoChevronLeft></GoChevronLeft>
          )}
        </div>
      </div>
      {expnaded && <div className="p-2 border-t">{children}</div> }
    </div>
  );
}
