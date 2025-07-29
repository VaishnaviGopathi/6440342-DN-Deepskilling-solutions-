import React, { useEffect, useState } from "react";

function Getuser() {
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");

  useEffect(() => {
    fetch("https://api.randomuser.me/")
      .then((res) => res.json())
      .then((data) => {
        const user = data.results[0];
        const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
        const imageUrl = user.picture.large;

        setName(fullName);
        setPicture(imageUrl);
      })
      .catch((error) => console.error("Error fetching user:", error));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{name}</h1>
      {picture && <img src={picture} alt="User" style={{ borderRadius: "50%" }} />}
    </div>
  );
}

export default Getuser;
