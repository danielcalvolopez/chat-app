import classes from "./Chats.module.css";

const Chats = () => {
  return (
    <div className={classes.chats}>
      <div className={classes["user-chat"]}>
        <img
          src="https://images.pexels.com/photos/13187759/pexels-photo-13187759.jpeg?cs=srgb&dl=pexels-tim-mossholder-13187759.jpg&fm=jpg"
          alt="john"
        />
        <div className={classes["user-chat-info"]}>
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      <div className={classes["user-chat"]}>
        <img
          src="https://images.pexels.com/photos/13187759/pexels-photo-13187759.jpeg?cs=srgb&dl=pexels-tim-mossholder-13187759.jpg&fm=jpg"
          alt="john"
        />
        <div className={classes["user-chat-info"]}>
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      <div className={classes["user-chat"]}>
        <img
          src="https://images.pexels.com/photos/13187759/pexels-photo-13187759.jpeg?cs=srgb&dl=pexels-tim-mossholder-13187759.jpg&fm=jpg"
          alt="john"
        />
        <div className={classes["user-chat-info"]}>
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
