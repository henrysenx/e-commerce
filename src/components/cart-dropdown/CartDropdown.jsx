import React from "react";
import "./CartDropdown.scss";
import CustomButton from "../custom-button/customButton";
import CartItem from "../cart-item/cartItem";
import { withRouter } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { toggleCartHidden } from "../../Redux/cart/cartActions";

// Selectors
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../Redux/cart/cartSelectors";

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your Cart is Empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          toggleCartHidden();
        }}
      >
        CHECKOUT
      </CustomButton>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(
  connect(mapStateToProps, { toggleCartHidden })(CartDropdown)
);
