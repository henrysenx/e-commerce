import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../Redux/cart/cartActions";
import "./cartIcon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

// Selector
import { selectCartItemsCount } from "../../Redux/cart/cartSelectors";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

// export default CartIcon;
