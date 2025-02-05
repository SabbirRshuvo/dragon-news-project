import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Registar = () => {
  const { handleRegistar } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;

    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
    e.target.reset();
    handleRegistar(email, password);
  };
  return (
    <div className="min-h-[882px]  flex justify-center items-center  ">
      <div className=" bg-base-100 w-full max-w-md shrink-0 shadow-2xl rounded-xl">
        <h2 className="text-xl font-semibold text-center py-4">
          Registar Your Account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <fieldset className="fieldset">
            {/* user name */}
            <label className="fieldset-label">Your Name</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Enter your name"
            />
            {/* photo url */}
            <label className="fieldset-label">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input w-full"
              placeholder="Enter your url"
            />
            {/* email */}
            <label className="fieldset-label">Email</label>
            <input
              type="email"
              name="email"
              className="input w-full"
              placeholder="Enter your email address"
            />
            {/* password */}
            <label className="fieldset-label">Password</label>
            <input
              type="password"
              name="password"
              className="input w-full"
              placeholder="Enter your password"
            />
            <div className="flex items-center mt-2 ">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-md"
              />
              <p className="ml-2 ">Accept Terms & Conditions</p>
            </div>
            <button className="btn btn-info mt-4">Registar</button>
          </fieldset>
        </form>
        <p className="text-center pb-6">
          Already have an Account ?
          <Link className="text-green-600 font-semibold ml-2" to="/auth/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registar;
