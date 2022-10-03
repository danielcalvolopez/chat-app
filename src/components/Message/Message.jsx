import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import classes from "./Message.module.css";

const Message = ({ message }) => {
  const currentUser = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  return (
    <div
      className={`${classes.message} ${
        message.senderId === currentUser.uid && classes.owner
      }`}
    >
      <div className={classes.info}>
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>just now</span>
      </div>
      <div className={classes.content}>
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
