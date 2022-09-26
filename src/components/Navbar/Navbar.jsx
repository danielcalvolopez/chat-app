import classes from "./Navbar.module.css";

const Navbar = () => {
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
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
