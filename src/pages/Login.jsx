import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { handleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    handleSignIn(email, password);
    e.target.reset();
    {
      navigate(location?.state ? location.state : "/");
    }
  };
  return (
    <div className="min-h-[882px]  flex justify-center items-center  ">
      <div className=" bg-base-100 w-full max-w-md shrink-0 shadow-2xl rounded-xl">
        <h2 className="text-xl font-semibold text-center py-4">
          Login Your Account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <fieldset className="fieldset">
            <label className="fieldset-label">Email</label>
            <input
              type="email"
              name="email"
              className="input w-full"
              placeholder="Email"
            />
            <label className="fieldset-label">Password</label>
            <input
              type="password"
              name="password"
              className="input w-full"
              placeholder="Password"
            />
            <button className="btn btn-info mt-4">Login</button>
          </fieldset>
        </form>
        <p className="text-center pb-6">
          Create a new Account ?
          <Link
            className="text-green-600 font-semibold ml-2"
            to="/auth/registar"
          >
            Registar
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
