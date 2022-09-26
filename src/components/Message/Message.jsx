import classes from "./Message.module.css";

const Message = () => {
  return (
    <div className={`${classes.message} ${classes.owner}`}>
      <div className={classes.info}>
        <img
          src="https://images.pexels.com/photos/13187759/pexels-photo-13187759.jpeg?cs=srgb&dl=pexels-tim-mossholder-13187759.jpg&fm=jpg"
          alt="john"
        />
        <span>just now</span>
      </div>
      <div className={classes.content}>
        <p>hello</p>
      </div>
    </div>
  );
};

export default Message;
