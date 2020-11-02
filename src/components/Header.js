import React from "react";

const Header = () => {
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "2em"
  };
  return (
    <header style={headerStyle}>
      <h1 style={{ fontsize: "25px", marginBottom: "15px" }}>
        Lista zadań do wykonania
        </h1>
      <p style={{ fontSize: "19px" }}>
        Wpisz zadanie do wykonania poniżej
        </p>
    </header>
  );
};

export default Header;