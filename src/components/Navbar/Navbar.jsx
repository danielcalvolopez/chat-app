import { signOut } from "firebase/auth";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { auth } from "../../firebase";
import { allRoutes } from "../../utils/routes";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const currentUser = useContext(AuthContext);
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate(allRoutes.login.path);
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
        <img src={currentUser?.photoURL} alt="john"></img>
        <span>{currentUser?.displayName}</span>
        <button onClick={handleLogout}>Logout</button>
        {err && <p className={classes.error}>Something went wrong!</p>}
      </div>
    </div>
  );
};

export default Navbar;
