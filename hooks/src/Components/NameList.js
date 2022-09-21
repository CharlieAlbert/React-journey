import React from "react";

function NameList() {
  const names = ["Bruce", "Charles", "Wembanyama"];

  return (
    <>
      {names.map((name) => (
        <h2>{name}</h2>
      ))}
    </>
  );
}

export default NameList;
