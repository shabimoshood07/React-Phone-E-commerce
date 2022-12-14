import React from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import { useGlobalContext } from "../../context";

function Cart() {
  const { cart } = useGlobalContext();
  if (cart.length < 1) {
    return <EmptyCart />;
  } else {
    return (
      <section>
        <Title name="Your" title="Cart"></Title>
        <CartColumns />
        <CartList />
        <CartTotals />
      </section>
    );
  }
}

export default Cart;
