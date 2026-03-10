import { maleTips, femaleTips, olderTips } from "../data/store";

export const getCategory = (bmi) => {
  console.log(bmi);
  if (bmi < 18.5) return { level: "Underweight", color: "bg-blue-500" };
  if (bmi >= 18.5 && bmi < 25)
    return { level: "Normal", color: "bg-green-500" };
  if (bmi >= 25 && bmi < 30)
    return { level: "Overweight", color: "bg-yellow-500" };
  return { level: "Obese", color: "bg-red-500" };
};

export const getHealtTips = (age, gender, bmi) => {
  let tipsData = [];
  if (age > 59) {
    tipsData = olderTips;
  } else if (gender === "Male") {
    tipsData = maleTips;
  } else {
    tipsData = femaleTips;
  }

  if (bmi < 18.5) {
    return tipsData.underweight;
  } else if (bmi < 25) {
    return tipsData.normal;
  } else if (bmi < 30) {
    return tipsData.overweight;
  } else {
    return tipsData.obese;
  }
};
