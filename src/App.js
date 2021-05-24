import "./App.css";
import Header from "./Header";
import Item from "./Item";
import CartItems from "./cartItems";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useFormik } from "formik";

function App() {
  const formik = useFormik({
    initialValues: {
      shop: {
        1: {
          id: 1,
          image: "cologne.jpg",
          desc: "Unisex Cologne",
          value: 0,
        },
        2: {
          id: 2,
          image: "iwatch.jpg",
          desc: "Apple iWatch",
          value: 0,
        },
        3: {
          id: 3,
          image: "mug.jpg",
          desc: "Unique Mug",
          value: 0,
        },
        4: {
          id: 4,
          image: "wallet.jpg",
          desc: "Mens Wallet",
          value: 0,
        },
      },
      cartCount: 0,
      cartItems: [],
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const updateQuatity = (id, add, remove) => {
    if (add) {
      formik.setFieldValue((formik.values.shop[id].value += 1));
      formik.setFieldValue((formik.values.cartCount += 1));
    } else if (remove) {
      formik.setFieldValue((formik.values.shop[id].value -= 1));
      formik.setFieldValue((formik.values.cartCount -= 1));
    }
  };

  const calCart = () => {
    let cartItems = [];

    Object.values(formik.values.shop).forEach((item) => {
      if (item.value) {
        cartItems.push(item);
      }
    });

    formik.setFieldValue((formik.values.cartItems = cartItems));
  };

  const clearCartItems = () => {
    formik.setFieldValue((formik.values.cartItems = []));
  };
  return (
    <div className="App container">
      <Header cartCount={formik.values.cartCount} calCart={calCart} />
      {!formik.values.cartItems.length ? (
        <Item shopItems={formik.values.shop} updateQuatity={updateQuatity} />
      ) : (
        <CartItems
          cartItems={formik.values.cartItems}
          clearCartItems={clearCartItems}
        />
      )}
    </div>
  );
}

export default App;
