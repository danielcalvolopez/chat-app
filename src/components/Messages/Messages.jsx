import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";
import { db } from "../../firebase";
import Message from "../Message/Message";
import classes from "./Messages.module.css";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  console.log(messages);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unsub();
    };
  }, [data.chatId]);

  return (
    <div className={classes.messages}>
      {messages?.map((message) => (
        <Message message={message} key={message.id} />
      ))}
    </div>
  );
};

export default Messages;
