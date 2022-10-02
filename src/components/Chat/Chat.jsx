import classes from "./Chat.module.css";
import { HiVideoCamera, HiUserAdd, HiDotsHorizontal } from "react-icons/hi";
import Messages from "../Messages/Messages";
import Input from "../Input/Input";
import { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";

const Chat = ({ className }) => {
  const data = useContext(ChatContext);

  return (
    <div className={className}>
      <div className={classes["chat-info"]}>
        <div className={classes.receiver}>
          <span>{data.user?.displayName}</span>
        </div>
        <div className={classes.icons}>
          <HiVideoCamera cursor="pointer" fontSize="1.5em" />
          <HiUserAdd cursor="pointer" fontSize="1.5em" />
          <HiDotsHorizontal cursor="pointer" fontSize="1.5em" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
