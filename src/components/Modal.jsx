import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ isClose, isopen, children }) => {
  return (
    <>
      {isopen && (
        <div className="">
          <div className=" m-auto p-2 z-50 min-h-[220px] max-w-[80%] bg-slate-400 mt-2 relative">
            <div className="flex justify-end ">
              <AiOutlineClose
                className="  text-2xl cursor-pointer "
                onClick={isClose}
              />
            </div>
            {children}
          </div>
          <div
            onClick={isClose}
            className=" top-0  fixed backdrop-blur z-40 h-screen w-screen "
          />
        </div>
      )}
    </>
  );
};

export default Modal;
