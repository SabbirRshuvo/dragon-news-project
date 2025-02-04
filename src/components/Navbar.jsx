import { Link } from "react-router";
import userIcon from "../assets/user.png";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div></div>
      <div className="space-x-5">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="flex gap-2 login items-center">
        <img src={userIcon} alt="userIcon" />
        <button className="btn btn-info">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
