import React, { useState } from "react";
import { Shop_Data } from "./shop.data";
import { PreviewCollection } from "../../componets/preview-collection/preview-collection.componet";
export const ShopPage = () => {
  const shopData = useState(Shop_Data);

  return (
    <div className="shop-page ">
      {shopData[0].collections.map(({ id, title, items }) => (
        <PreviewCollection
          title={title}
          key={id}
          items={items}
          
        />
      ))}
    </div>
  );
};
