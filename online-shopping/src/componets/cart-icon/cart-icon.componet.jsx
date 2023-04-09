import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import React from "react";

export const CartIcon = () => {
  return (
    <div className=" w-[45px] h-[45px] relative flex items-center justify-center cursor-pointer ">
      <ShoppingIcon className="w-[24px] h-[24px] " />
      <span className="absolute text-[10px] font-bold bottom-[12px] ">0</span>
    </div>
  );
};
