import React from "react";
import { useNavigate } from "react-router-dom";
import "./menu-item.style.css";
export const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  let navigate = useNavigate();

  return (
    <>
      <div
        className={`${size} w-full md:w-auto min-w-[30%] h-[240px] flex-auto flex items-center justify-center border-[1px] my-2 mr-[7.5px] ml-[15px] overflow-hidden	  border-solid border-black hover:cursor-pointer first:mr-[7.5px] last:ml-[7.5px]  `}
        onClick={() => navigate(`/${linkUrl}`)}
      >
        <div
          className="w-full h-full bg-center	bg-cover 	"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        <div className="h-[90px] px-[25px] py-0 flex  flex-col  items-center border-[1px] border-solid border-black bg-white opacity-[0.7] absolute ">
          <h1 className="font-bold	mb-[6px] text-[22px] text-[#4a4a4a]">
            {title.toUpperCase()}
          </h1>
          <span className="font-light	text-[16px]">shop now</span>
        </div>
      </div>
      <div></div>
    </>
  );
};
