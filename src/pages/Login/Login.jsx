import Card from "../../UI/Card";
import classes from "./Login.module.css";

const Login = () => {
  return (
    <Card className={classes["form-container"]}>
      <div className={classes["form-wrapper"]}>
        <img src={process.env.PUBLIC_URL + "images/logo.svg"} alt="logo" />
        <form className={classes.form}>
          <input type="email" placeholder="Your email"></input>
          <input type="password" placeholder="Your password"></input>

          <button>Sign in</button>
        </form>
        <p>Don't you have an account? Register</p>
      </div>
    </Card>
  );
};

export default Login;
