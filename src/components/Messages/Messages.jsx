import Message from "../Message/Message";
import classes from "./Messages.module.css";

const Messages = () => {
  return (
    <div className={classes.messages}>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};

export default Messages;
