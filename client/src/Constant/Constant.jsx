export const primaryColor = "#132A13";
export const secondaryColor = "#31572C";
export const grayColor = "#464646";
export const whiteColor = "#ffffff";

export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const currentDate = () => {
  const time = new Date();

  return `${time.getDate < 10 ? "0" + time.getDate() : time.getDate()} ${
    months[time.getMonth()]
  } ${time.getFullYear()}`;
};

export const bgDefault = (coverImg) => ({
  background: `url('${coverImg}')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
});
