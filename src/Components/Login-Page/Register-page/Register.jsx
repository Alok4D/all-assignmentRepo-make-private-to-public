import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Auth-Provider/AuthProvider";

const Register = () => {

    const {registerUser} = useContext(AuthContext)
    console.log(registerUser);
  


    const handleRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        const photo = e.target.photo.value;
        console.log(name, photo, email, password, confirmPassword);
        registerUser(email, password);
    }


    return (
        <div  className="w-80 md:w-96 lg:w-[500px] mx-auto mt-8 bg-white flex items-center relative overflow-hidden shadow-xl mb-8">
                {/* register form  */}
                <div className={`p-8 w-full duration-500` }>
                    <h1 className="backdrop-blur-sm text-2xl lg:text-4xl pb-4">Register</h1>

                    <form onSubmit={handleRegister} className="space-y-2">

               <div>
               <p>Name</p>
                <input name='name' type="text" placeholder="Type here" className="input input-bordered w-full " />
               </div>
               <div>
               <p>Photo</p>
                <input name='photo' type="text" placeholder="Type here" className="input input-bordered w-full " />
               </div>
               <div>
               <p>Email</p>
                <input name='email' type="text" placeholder="Type here" className="input input-bordered w-full " />
               </div>
               <div>
               <p>Password</p>
                <input name='password' type="text" placeholder="Type here" className="input input-bordered w-full " />
               </div>
               <div>
               <p>Confirm Password</p>
                <input name='confirmPassword' type="text" placeholder="Type here" className="input input-bordered w-full " />
               </div>
               <button type="submit" className="btn btn-primary w-full mt-5">Register</button>
                    </form>



                    <p className="mb-3 text-center">Already have an account?<Link to="/login" className="underline font-semibold">Login</Link></p>
                    <hr />
                     <button type="button" className="py-2 px-5 mb-4 mt-8 mx-auto block shadow-lg border rounded-md border-black"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current inline-block mr-2"><path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path></svg>Continue with Google</button>
                 </div>
        </div>
    );
};

export default Register;