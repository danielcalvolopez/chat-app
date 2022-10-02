import classes from "./Search.module.css";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  console.log(user.displayName);

  const handleSearchInput = (e) => {
    setUsername(e.target.value);
  };

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };
  return (
    <div className={classes.search}>
      <div className={classes["search-form"]}>
        <input
          type="text"
          placeholder="Find a user"
          onKeyDown={handleKey}
          onChange={handleSearchInput}
          value={username}
        />
        <IoIosSearch fontSize="1.5em" />
      </div>
      {err && <p className={classes.error}>User not found!</p>}
      {user && (
        <div className={classes["user-chat"]}>
          <img src={user?.photoURL} alt="" />
          <div className={classes["user-chat-info"]}>
            <span>{user?.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
