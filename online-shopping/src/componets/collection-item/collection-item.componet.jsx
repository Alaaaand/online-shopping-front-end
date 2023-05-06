import "./collection-item.style.scss";
import { CustomButton } from "../custom-button/custom-button.componet";
const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton> add to cart</CustomButton>
    </div>
  );
};
export default CollectionItem;
