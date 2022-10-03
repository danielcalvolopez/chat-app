import { doc, onSnapshot } from "firebase/firestore";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import { db } from "../../firebase";
import classes from "./Chats.module.css";

const Chats = () => {
  const [chats, setChats] = useState([]);

  console.log(Object.entries(chats));

  const currentUser = useContext(AuthContext);
  const chatContext = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(
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

  const sortedChats = Object.entries(chats)?.sort(
    (a, b) => b[1].date - a[1].date
  );
  return (
    <div className={classes.chats}>
      {sortedChats.map((chat) => (
        <div
          className={classes["user-chat"]}
          key={chat[0]}
          onClick={() => handleSelect(chat[1].userInfo)}
        >
          <img src={chat[1].userInfo.photoURL} alt="john" />
          <div className={classes["user-chat-info"]}>
            <span>{chat[1].userInfo.displayName}</span>
            <p>{chat[1].lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
