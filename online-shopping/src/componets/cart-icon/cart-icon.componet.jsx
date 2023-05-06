import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useDispatch, useSelector } from "react-redux";
import { Connect } from "react-redux";
import React from "react";

import { toggleCartHidden } from "../../pages/redux/cart/cart.actions";

const CartIcon = () => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(toggleCartHidden());

  return (
    <div
      className=" w-[45px] h-[45px] relative flex items-center justify-center cursor-pointer "
      onClick={handleClick}
    >
      <ShoppingIcon className="w-[24px] h-[24px] " />
      <span className="absolute text-[10px] font-bold bottom-[12px] ">0</span>
    </div>
  );
};
// const mapDispatchToProps = (dispatch) => ({
//   toggleCartHiddens: () => dispatch(toggleCartHiddens()),
// });

export default CartIcon;
