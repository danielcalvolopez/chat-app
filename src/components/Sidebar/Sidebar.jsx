import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import Chats from "../Chats/Chats";

const Sidebar = ({ className }) => {
  return (
    <div className={className}>
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
