import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialNav = () => {
  return (
    <div className="">
      <h1 className="text-lg font-semibold">Login With</h1>
      <div className="mt-4 space-y-2 *:bg-base-100 block">
        <button className="btn w-full">
          <FaGoogle />
          Login with Google
        </button>
        <button className="btn w-full">
          <FaGithub />
          Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialNav;
