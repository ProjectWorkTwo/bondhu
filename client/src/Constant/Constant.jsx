export const primaryColor = "#132A13";
export const secondaryColor = "#31572C";
export const grayColor = "#464646";
export const whiteColor = "#ffffff";

// Function to hide any popup
export const hidePopUp = (wrapperRef, boxRef, setStatus) => {
  wrapperRef?.current?.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!boxRef?.current?.contains(e.target)) setStatus((prev) => false);
  });
};

export const bgDefault = (coverImg) => ({
  background: `url('${coverImg}')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
});
