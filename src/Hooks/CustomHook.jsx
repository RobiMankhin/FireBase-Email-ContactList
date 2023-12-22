import { useState } from "react";

const CustomHook = () => {
  const [isopen, setIsopen] = useState(false);

  const onOpen = () => {
    setIsopen(true);
  };
  const isClose = () => {
    setIsopen(false);
  };
  return { isopen, isClose, onOpen };
};

export default CustomHook;
