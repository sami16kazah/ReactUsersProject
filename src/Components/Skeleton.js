import classNames from "classnames";

export default function Skeleton({ times ,className }) {
  const boxes = [];
  const outerClassNames = classNames(
    "relative overflow-hidden bg-gray-200 rounded mb-2.5",className
  );
  const innerClassNames = classNames(
    "animate-shimmer absolute inset-0 -translate-x-full bg-gradient-to-r from-gray-200 via-white to-gray-200",
    
  );
  for (let index = 0; index < times; index++) {
    boxes.push(
      <div className={outerClassNames} key={index}>
        <div className={innerClassNames}></div>
      </div>
    );
  }
  return boxes;
}
