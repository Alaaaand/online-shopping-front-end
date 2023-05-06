import "./custom-button.style.scss";

export const CustomButton = ({ children, inverted, ...otherProps }) => (
  <button
    className={`${inverted ? "inverted" : ""}  custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);
