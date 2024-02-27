import styled, { css } from "styled-components";

type stringOrNum = string | number;

interface SkeletonProps {
  type?: "text" | "circle" | "react" | "round";
  size?: stringOrNum;
  width?: stringOrNum;
  height?: stringOrNum;
  color?: string;
  animType?: string | boolean;
  roundness?: string | number;
  className?: string | object;
  anim1?: string;
  anim2?: string[];
  style?: object;
}

const checkPrefixAndModify = (value: stringOrNum, prefix: string) => {
  return (
    typeof value === "string"
      ? isNaN(+value)
        ? value
        : +value + prefix
      : value + prefix
  ).trim();
};

const checkRoundness = (type: string) => {
  switch (type?.toLowerCase()) {
    case "circle":
      return "50%";
    case "react":
      return "0";
    case "round":
      return "12px";
    default:
      return "4px";
  }
};
const slideAnim = css`
  0% {
    left: 0;
    opacity: 1;
  }
  20%,
  80% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    left: 200%;
  }
`;
const pulseAnim = css`
  0%,
  100% {
    opacity: 0.3;
    transform: scaleX(0.99);
  }
  50% {
    opacity: 0.85;
    transform: scaleX(1);
  }
`;

/* 

  ${(props) =>
    props.$animType ? `animation: ${pulseAnim} 1.6s linear infinite;` : ""}


    ${(props) =>
    typeof props.$animType === "string" &&
    props.$animType?.toLowerCase() === "slide"
      ? `&::before {
      animation: ${slideAnim} 1.5s linear infinite;
    }
    &::after {
      animation-delay: 0.5s;
      animation: ${slideAnim} 1s linear infinite;
    }`
      : ""}
*/

const SkeletonComp = styled.div<SkeletonProps>`
  background: ${(props) => props.color};
  ${(props) =>
    props.type?.toLowerCase() === "circle"
      ? `width: ${props.size};
    height: ${props.size};`
      : `width: ${props.width};
    height: ${props.height};`}
  margin: 5px 0;
  border-radius: ${(props) => props.roundness};
  overflow: hidden;
  position: relative;
  ${(props) => props.anim1}
  transform-origin: left center;
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 20%;
    height: 5000%;
    top: 50%;
    transform: translate(-100%, -50%) rotate(15deg);
    background: rgba(255, 255, 255, 0.25);
    left: 0;
    filter: blur(50px);
  }
  &::before {
    ${(props) => props.anim2[0]}
  }
  &::after {
    animation-delay: 0.5s;
    ${(props) => props.anim2[1]}
  }
`;
const Skeleton: React.FC<SkeletonProps> = (props) => {
  const newModifiedProps = { ...props };
  newModifiedProps["animType"] || (newModifiedProps["animType"] = "pulse");
  newModifiedProps["type"] || (newModifiedProps["type"] = "text");
  newModifiedProps["color"] || (newModifiedProps["color"] = "#ddd");

  newModifiedProps["size"] = checkPrefixAndModify(
    newModifiedProps["size"] || "20px",
    "px"
  );
  newModifiedProps["width"] = checkPrefixAndModify(
    newModifiedProps["width"] || "100%",
    "px"
  );
  newModifiedProps["height"] = checkPrefixAndModify(
    newModifiedProps["height"] || "16px",
    "px"
  );
  newModifiedProps["roundness"] =
    newModifiedProps["roundness"] || checkRoundness(newModifiedProps["type"]);

  newModifiedProps["roundness"] = checkPrefixAndModify(
    newModifiedProps["roundness"],
    "px"
  );

  const anim1 = newModifiedProps["animType"]
    ? `animation: ${pulseAnim} 1.6s linear infinite;`
    : "";
  const anim2 =
    newModifiedProps["animType"] === "string" &&
    newModifiedProps["animType"]?.toLowerCase() === "slide"
      ? [
          `animation: ${slideAnim} 1.5s linear infinite;`,
          `animation: ${slideAnim} 1s linear infinite;`,
        ]
      : ["", ""];
  newModifiedProps["anim1"] = anim1;
  newModifiedProps["anim2"] = anim2;
  return <SkeletonComp {...newModifiedProps} />;
};

export default Skeleton;
