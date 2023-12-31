const hidePopUp = (e, boxRef, setStatus, stopPropagation = false) => {
  stopPropagation && e.stopPropagation();
  if (!boxRef?.current?.contains(e.target)) return setStatus((prev) => false);
};

export default hidePopUp;
