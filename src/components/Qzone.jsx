import swimming from "../assets/swimming.png";
import classroom from "../assets/class.png";
import playground from "../assets/playground.png";
import ph from "../assets/bg.png";

const Qzone = () => {
  return (
    <div className="bg-gray-200 mt-6 p-4">
      <h1 className="text-lg font-semibold">Q-Zone</h1>
      <div className=" mt-4 space-y-4 items-center">
        <img
          className="border border-dashed  p-2 w-full"
          src={swimming}
          alt=""
        />
        <img
          className="border border-dashed p-2 w-full"
          src={classroom}
          alt=""
        />
        <img
          className="border border-dashed p-2 w-full"
          src={playground}
          alt=""
        />
        <img className="border border-dashed p-2 w-full" src={ph} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
