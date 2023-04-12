import "./styles.scss";
import { FaTasks } from "react-icons/fa";
import MainMenu from "../MainMenu";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Header() {
  const { logout } = useContext(AuthContext);

  const handleLogOut = async () => {
    logout();
  };

  return (
    <header>
      <div className="title">
        <FaTasks />
        My Cook Book
      </div>
      <MainMenu />
      <div className="author">
        <button onClick={handleLogOut}>Log out</button>
      </div>
    </header>
  );
}
