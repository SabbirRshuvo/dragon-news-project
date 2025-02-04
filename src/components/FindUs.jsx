import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="mt-8">
      <h1 className="text-lg font-semibold">Find Us On</h1>
      <div className="join flex mt-4 join-vertical *:bg-base-100 ">
        <button className="btn join-item justify-start">
          <FaFacebook />
          Facebook
        </button>
        <button className="btn join-item justify-start">
          <FaTwitter />
          Twitter
        </button>
        <button className="btn join-item justify-start">
          <FaInstagram />
          Instragram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
