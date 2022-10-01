import { signOut } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
      console.log("signed out!");
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className={classes.navbar}>
      <span className={classes.logo}>
        <img src={process.env.PUBLIC_URL + "images/logo.svg"} alt="logo" />
      </span>
      <div className={classes.user}>
        <img
          src="https://images.pexels.com/photos/13187759/pexels-photo-13187759.jpeg?cs=srgb&dl=pexels-tim-mossholder-13187759.jpg&fm=jpg"
          alt="john"
        ></img>
        <span>John</span>
        <button onClick={handleLogout}>Logout</button>
        {err && <p className={classes.error}>Something went wrong!</p>}
      </div>
    </div>
  );
};

export default Navbar;
