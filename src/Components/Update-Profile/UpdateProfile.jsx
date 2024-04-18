import { updateProfile } from "firebase/auth";
import { auth } from "../../FireBase/firebase.init";
import { useContext } from "react";
import { AuthContext } from "../Auth-Provider/AuthProvider";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Helmet } from "react-helmet-async";


const UpdateProfile = () => {

  const {user} = useContext(AuthContext)
 

  const updateProfileForm = (e) => {
    e.preventDefault()
    const name = e.target.name.value;
    const photo = e.target.photoURL.value;
    console.log(name, photo);

    // update profile
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
  })

   
}

useEffect(() => {
  AOS.init({
    duration: 2000, 
  });
}, []);


    return (
  <div className="w-[80%] mx-auto bg-slate-50 mt-8 mb-8" data-aos="flip-left"
  data-aos-easing="ease-out-cubic"
  data-aos-duration="2000">
    <Helmet>
      <title>Update Your Profile</title>
    </Helmet>
    <h2 className="flex justify-center items-center text-5xl font-extrabold ">Update Profile  Information</h2>

    <div className="card mx-auto shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-8">
    
    <form onSubmit={updateProfileForm} className="card-body ">

              <div>
               <p>Name</p>
                <input name='name' type="text" placeholder="Type here" className="input input-bordered w-full " />
               </div>
              <div>
               <p>Email</p>
                <input name='email' type="text" placeholder={user?.email} className="input input-bordered w-full " />
               </div>
               <div>
               <p>PhotoURL</p>
                <input name='photoURL' type="text" placeholder="Type here" className="input input-bordered w-full " />
               </div>


      <div className="form-control mt-6">
        <button type="submit" className="btn btn-primary">Update Now</button>
      </div>
    </form>
  </div>
  </div>


    );
};

export default UpdateProfile;