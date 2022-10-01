import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import Card from "../../UI/Card";
import classes from "./Login.module.css";
import { allRoutes } from "../../utils/routes";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target[0].value;
    const password = event.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <Card className={classes["form-container"]}>
      <div className={classes["form-wrapper"]}>
        <img src={process.env.PUBLIC_URL + "images/logo.svg"} alt="logo" />
        <form className={classes.form} onSubmit={handleSubmit}>
          <input type="email" placeholder="Your email"></input>
          <input type="password" placeholder="Your password"></input>

          <button>Sign in</button>
        </form>
        {err && <p className={classes.error}>Something went wrong!</p>}
        <p>
          Don't you have an account?
          <Link className={classes.routerlink} to={allRoutes.register.path}>
            &nbsp;Register
          </Link>
        </p>
      </div>
    </Card>
  );
};

export default Login;
