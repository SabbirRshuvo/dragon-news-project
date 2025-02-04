import moment from "moment";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 py-4">
      <div className="">
        <img className="w-[300px]" src={logo} alt="logo" />
      </div>
      <h3 className="text-gray-500">Journalism Without Fear or Favour</h3>
      <p className="text-gray-600 text-lg font-semibold">
        {moment().format("MMMM Do YYYY, h:mm a")}
      </p>
    </div>
  );
};

export default Header;
