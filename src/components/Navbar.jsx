import { Link } from "react-router";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {
  const { name, user, handleSignOut } = useContext(AuthContext);

  return (
    <div className="flex justify-between items-center">
      <div>{name}</div>
      <div className="space-x-5">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="flex gap-2 login items-center">
        <img src={userIcon} alt="userIcon" />

        {user ? (
          <Link
            onClick={handleSignOut}
            to="/auth/login"
            className="btn btn-info"
          >
            Log Out
          </Link>
        ) : (
          <Link to="/auth/login" className="btn btn-info">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
