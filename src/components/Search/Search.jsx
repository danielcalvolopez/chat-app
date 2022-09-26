import classes from "./Search.module.css";
import { IoIosSearch } from "react-icons/io";

const Search = () => {
  return (
    <div className={classes.search}>
      <div className={classes["search-form"]}>
        <input type="text" placeholder="Find a user" />
        <IoIosSearch fontSize="1.5em" />
      </div>
      <div className={classes["user-chat"]}>
        <img
          src="https://images.pexels.com/photos/13187759/pexels-photo-13187759.jpeg?cs=srgb&dl=pexels-tim-mossholder-13187759.jpg&fm=jpg"
          alt="john"
        />
        <div className={classes["user-chat-info"]}>
          <span>John</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
