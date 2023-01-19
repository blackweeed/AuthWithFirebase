import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { auth } from "../../firebase";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  const { currentUser } = useContext(AuthContext);

  const elo = "How can mirrors be real if our eyes aren't real";

  const zdanie = elo.split(" ");

  const essa = zdanie.map((item) => {
    return item.charAt(0).toUpperCase() + item.slice(1);
  });

  // console.log(newWords.join(" "));w
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        alert("Log out successfully");
      })
      .catch(() => {
        console.log("error logging");
      });
  };

  const getCount = (str) => {
    let vowels = ["a", "e", "i", "o", "u"];
    return str.split("").filter((letter) => {
      return vowels.includes(letter) ? true : false;
    }).length;
  };

  console.log(getCount(""));

  return (
    <div>
      <h5>{essa.join(" ")}</h5>
      <h1>AuthDetails</h1>
      <img src={currentUser.photoURL} alt="" />
      <h3>{currentUser.displayName}</h3>
      <h3>{currentUser.email}</h3>
      <button onClick={userSignOut}>Sign Out</button>
    </div>
  );
};

export default AuthDetails;
