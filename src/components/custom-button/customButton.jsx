import React from "react";
import "./customButton.scss";
import { CustomButtonContainer } from "./CustomButtonStyles";

// const CustomButton = ({ children, ...props }) => {
//   return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
// };

// export default CustomButton;

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${
        isGoogleSignIn ? "google-sign-in" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
