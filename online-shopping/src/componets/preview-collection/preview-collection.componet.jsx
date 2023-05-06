import "./preview-collection.style.scss";
import CollectionItem from "../collection-item/collection-item.componet";
export const PreviewCollection = ({ title, items }) => {
  return (
    <div className="preview-collection">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          ?.filter((item, idx) => idx < 4)
          .map(({ id, name, price, imageUrl }) => (
            <CollectionItem
              key={id}
              name={name}
              price={price}
              imageUrl={imageUrl}
            />
          ))}
      </div>
    </div>
  );
};
