import { imgData } from "../data/imgData";

export const getFeatureProjects = () => {
  return imgData.filter((item) => item.top === true);
};

export const getProjects = () => {
  return imgData.filter((item) => item.top === false);
};
