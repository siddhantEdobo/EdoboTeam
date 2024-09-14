export const CalcWidthValue = (value, windowWidth) => {
  return (value * windowWidth) / 1440;
};

export const getDeepCopy = (data) =>
  !data ? null : JSON.parse(JSON.stringify(data));

export const setDeepCopy = (data) => (!data ? null : JSON.stringify(data));

export const devicesListOption = [
  { label: "both", id: 1 },
  { label: "web", id: 2 },
  { label: "mobile", id: 3 },
];

export const ccyFormat = (num) => {
  return `${num?.toFixed(2)}`;
};
