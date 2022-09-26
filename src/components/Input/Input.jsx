import classes from "./Input.module.css";
import { IoMdAttach } from "react-icons/io";
import { RiImageAddLine } from "react-icons/ri";
import { GrEmoji } from "react-icons/gr";

const Input = () => {
  return (
    <div className={classes.input}>
      <input type="text" placeholder="Type something..." />
      <div className={classes.send}>
        <GrEmoji cursor="pointer" fontSize="1.5em" color="gray" />
        <IoMdAttach cursor="pointer" fontSize="1.5em" color="gray" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <RiImageAddLine cursor="pointer" fontSize="1.5em" color="gray" />
        </label>
        <button type="submit">Send</button>
      </div>
    </div>
  );
};

export default Input;
