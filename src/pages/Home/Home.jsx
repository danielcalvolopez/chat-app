import { useContext } from "react";
import Chat from "../../components/Chat/Chat";
import Sidebar from "../../components/Sidebar/Sidebar";
import { ChatContext } from "../../context/ChatContext";
import classes from "./Home.module.css";

const Home = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className={classes.home}>
      <div className={classes.container}>
        <Sidebar className={classes.sidebar} />
        {data.chatId !== "null" && <Chat className={classes.chat} />}
      </div>
    </div>
  );
};

export default Home;
