import { doc, onSnapshot } from "firebase/firestore";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import { db } from "../../firebase";
import classes from "./Chats.module.css";

const Chats = () => {
  const [chats, setChats] = useState({});

  const currentUser = useContext(AuthContext);
  const chatContext = useContext(ChatContext);

  useEffect(() => {
    const getChats = async () => {
      const unsub = await onSnapshot(
        doc(db, "userChats", currentUser?.uid),
        (doc) => {
          setChats(doc.data());
        }
      );

      return () => {
        unsub();
      };
    };

    currentUser?.uid && getChats();
  }, [currentUser?.uid]);

  const handleSelect = (u) => {
    chatContext.dispatch({ type: "CHANGE_USER", payload: u });
  };

  const sort = Object.entries(chats || {}).sort(
    (chatA, chatB) => chatB[1].date - chatA[1].date
  );

  return (
    <div className={classes.chats}>
      {sort.map((chat) => (
        <div
          className={classes["user-chat"]}
          key={chat[0]}
          onClick={() => handleSelect(chat[1].userInfo)}
        >
          <img src={chat[1].userInfo.photoURL} alt="" />
          <div className={classes["user-chat-info"]}>
            <span>{chat[1].userInfo.displayName}</span>
            <p>
              {chat[1].lastMessage?.text && chat[1].lastMessage?.text}
              {chat[1].lastMessage?.photoURL && "image attached"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
