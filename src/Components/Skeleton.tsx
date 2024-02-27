import React from "react";
import SkeletonText from "./SkeletonText";
import SkeletonCircle from "./SkeletonCircle";
import SkeletonRect from "./SkeletonRect";
import SkeletonRound from "./SkeletonRound";

const Skeleton = (props) => {
  const { type } = props;
  switch (type) {
    case type.toLowerCase() === "circle":
      return <SkeletonCircle />;
    case type.toLowerCase() === "react":
      return <SkeletonRect />;
    case type.toLowerCase() === "round":
      return <SkeletonRound />;
    default:
      return <SkeletonText />;
  }
};

export default Skeleton;
