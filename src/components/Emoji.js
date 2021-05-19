/** @format */

import React from "react";

const Emoji = ({ symbol, label }) => {
  return (
    <span
      className="emoji"
      role="img"
      aria-label={symbol.label ? symbol.label : ""}
      aria-hidden={symbol.label ? "false" : "true"}>
      {symbol}
    </span>
  );
};

export default Emoji;
