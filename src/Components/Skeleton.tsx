import React from "react";
import SkeletonText from "./SkeletonText";
import SkeletonCircle from "./SkeletonCircle";
import SkeletonRect from "./SkeletonRect";
import SkeletonRound from "./SkeletonRound";

interface SkeletonProps {
  type: "text" | "circle" | "react" | "round";
}

const Skeleton: React.FC<SkeletonProps> = (props) => {
  const { type } = props;
  switch (type.toLowerCase()) {
    case "circle":
      return <SkeletonCircle />;
    case "react":
      return <SkeletonRect />;
    case "round":
      return <SkeletonRound />;
    default:
      return <SkeletonText />;
  }
};

export default Skeleton;
