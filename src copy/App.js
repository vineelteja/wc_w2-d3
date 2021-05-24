import "./App.css";
import Header from "./Header";
import Item from "./Item";
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

  const calculateCart = (shopItems) => {};

  return (
    <div className="App container">
      <Header cartCount={formik.values.cartCount} />
      <Item shopItems={formik.values.shop} updateQuatity={updateQuatity} />
    </div>
  );
}

export default App;
