import React, { useState } from "react";

const Home = () => {
  const [light, setLight] = useState("");
  return (
    <>
      <div className="traffic-light-container">
        <div className="lamp-post"></div>
        <div className="lamp-box">
          <div className={"light red" + ((light === "red") ?" on-red": "")} onClick={()=>setLight("red")}></div>
          <div className={"light yellow" + ((light === "yellow") ?" on-yellow": "") } onClick={()=>setLight("yellow")}></div>
          <div className={"light green" + ((light === "green") ?" on-green": "") } onClick={()=>setLight("green")}></div>
        </div>
      </div>
    </>
  );
};

export default Home;
