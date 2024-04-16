import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Auth-Provider/AuthProvider";
// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";


const Register = () => {


    useEffect(() => {
        const clear = setInterval(() => {
            console.log("I am called!");
        }, 1000)

        return () => {
            clearInterval(clear)
        }
    })


    const {registerUser, setUser} = useContext(AuthContext)
    const [error, setError] = useState("")
  


    const handleRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        const photo = e.target.photo.value;

        if(password.length<6){
            setError("Password must be 6 characters")
            return
        }
        else if(password !== confirmPassword){
            setError("Password didn't match")
            return
        }
        setError('');



        console.log(name, photo, email, password, confirmPassword);
        registerUser(email, password)
        .then(result=>{
            toast.success('User Create Successfully!')

           // update profile
           updateProfile(result.user, {
            displayName: name,
            photoURL: photo,
        })
            
            setUser(result.user)
        })
        .catch(error=> {
            console.error(error)
            toast.error('Already this email exit!')
        })
       
    }


    return (
        <div  className="w-80 md:w-96 lg:w-[500px] mx-auto mt-8 border rounded-xl bg-white flex items-center relative overflow-hidden shadow-xl mb-8">
                {/* register form  */}
                <div className={`p-8 w-full duration-500` }>
                    <h1 className="font-extrabold lg:text-4xl pb-4 flex justify-center items-center">Register Now!</h1>

                <form onSubmit={handleRegister} className="space-y-3">

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

                {
                    error && <small className="text-red-600">{error}</small>
                }

               <button type="submit" className="btn btn-primary w-full">Register</button>
               <ToastContainer></ToastContainer>
                </form>



                    <p className="mb-2 mt-3 text-center">Already have an account?<Link to="/login" className="underline font-semibold">Login</Link></p>

                    
                 </div>
        </div>
    );
};

export default Register;