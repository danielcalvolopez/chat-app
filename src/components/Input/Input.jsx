import classes from "./Input.module.css";
import { IoMdAttach } from "react-icons/io";
import { RiImageAddLine } from "react-icons/ri";
import { GrEmoji } from "react-icons/gr";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import { useState } from "react";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const Input = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const currentUser = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const date = new Date();

  const currentTime = date.getHours() + ":" + date.getMinutes();

  const handleTextInput = (e) => {
    setText(e.target.value);
  };
  const handleImgInput = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (text === "") {
      return;
    }

    if (image) {
      const storageRef = ref(storage, uuid());

      const uploadTask = await uploadBytesResumable(storageRef, image);

      getDownloadURL(uploadTask.ref).then(async (downloadURL) => {
        await updateDoc(doc(db, "chats", data.chatId), {
          messages: arrayUnion({
            id: uuid(),
            text,
            senderId: currentUser.uid,
            date: currentTime,
            img: downloadURL,
          }),
        });
      });
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: currentTime,
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });
    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });
    setText("");
    setImage(null);
  };

  return (
    <form className={classes.input}>
      <input
        type="text"
        placeholder="Type something..."
        onChange={handleTextInput}
        value={text}
      />
      <div className={classes.send}>
        <GrEmoji cursor="pointer" fontSize="1.5em" color="gray" />
        <IoMdAttach cursor="pointer" fontSize="1.5em" color="gray" />
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          onChange={handleImgInput}
        />
        <label htmlFor="file">
          <RiImageAddLine cursor="pointer" fontSize="1.5em" color="gray" />
        </label>
        <button type="submit" onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </form>
  );
};

export default Input;
