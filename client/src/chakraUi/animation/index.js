import { keyframes } from "@chakra-ui/react";

const slideUpAnimate = keyframes`
  0% {
    transform: translateY(5%);
    opacity: 0;
  }
  15% {
    transform: translateY(4.0999999999999996%);
    opacity: 1;
  }
  85% {
    transform: translateY(-4.0999999999999996%),
    opacity: 1,
  }
  100% {
    transform: translateY(-5%),
    opacity: 0,
  }
`;

const slideDownAnimate = keyframes`
  0% {
    transform: translateY(-8%);
    opacity: 0;
  }
  15% {
    transform: translateY(-7.0999999999999996%);
    opacity: 1;
  }
  85% {
    transform: translateY(7.0999999999999996%),
    opacity: 1,
  }
  100% {
    transform: translateY(8%),
    opacity: 0,
  }
`;

export const slideUp = `${slideUpAnimate} 20s linear infinite`;
export const slideDown = `${slideDownAnimate} 20s linear infinite`;
