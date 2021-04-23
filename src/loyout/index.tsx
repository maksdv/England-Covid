import React from "react";
import Header from "./Header";
import "../styles/App.css";
import "./style.css";

type TypeLoyout = {
  children: JSX.Element;
};
const Loyout = ({ children }: TypeLoyout) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/* ToDo Footer Component */}
      <footer className="flexCentered">footer</footer>
    </>
  );
};

export default Loyout;
