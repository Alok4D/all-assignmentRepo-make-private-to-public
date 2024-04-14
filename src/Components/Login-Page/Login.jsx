import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Auth-Provider/AuthProvider";


const Login = () => {
   
   const {loginUser} = useContext(AuthContext) 

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        loginUser(email, password)
    }

    return (
       <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">

    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
            <span className="label-text">Email</span>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
            <span className="label-text">Password</span>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        
      </form>

      <div>
      <p className="mb-3 text-center">Don&apos;t have an account?<Link to="/register" className="underline font-semibold">Register</Link></p>
        <hr />
      </div>

    </div>
  </div>
</div>
    );
};

export default Login;


