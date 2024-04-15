
import { useContext, useEffect } from "react";
import {useLoaderData, useLocation, useNavigate, useParams} from "react-router-dom";
import { AuthContext } from "../Auth-Provider/AuthProvider";

const CardDetails = () => {

    const locationRoutes = useLocation()
    console.log(locationRoutes );
    const navigate = useNavigate()
     
     const {user} = useContext(AuthContext)


    const cardDetail = useLoaderData();
    const {id} = useParams();
    const dataInt = parseInt(id);
    const cardBio = cardDetail.find(item => item.id == dataInt)
    console.log(cardBio);

    const {image, segment_name, location, estate_title, price, description, status, area, facilities} = cardBio;



    useEffect( () => {
        if(user){
          navigate(locationRoutes .state)
        }
       
      }, [user])

    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 mt-[52px] mb-[52px] w-[90%] mx-auto ">
            
        <div className="flex justify-center items-center bg-slate-300 border rounded-[16px]">
            <img src={image} alt="Shoes" className="lg:p-12 p-5 lg:w-[500px] w-[300px]"/>
        </div>

    <div className="c-details">
        <h2 className="text-[#131313] text-[40px]">{estate_title}</h2>
        <span className="text-[#646262] text-[20px]">By : {description}</span>
        <hr className="mt-2" />
        <h3 className="mt-2 mb-2">{status}</h3>
        <hr />
        <p className="text-[#131313] mt-3"><span className="text-[#131313] text-[16px]">Review: </span>{segment_name}</p>
        <p></p>


    <div className="flex gap-[65px] mt-4">
       <div className="text-[16px] text-[#646262]">
       <p>Number of Pages:</p>
        <p className="mt-2 mb-2">Publisher:</p>
        <p>Year of Publishing:</p>
        <p className="mt-2 mb-2">Rating:</p>
       </div>
       <div className="text-[16px] text-[#646262]">
        <p>{id}</p>
        <p  className="mt-2 mb-2">{location}</p>
        <p>{area}</p>
        <p  className="mt-2 mb-2">{price}</p>
       </div>
    </div>


    </div>
    </div>
    );
};

export default CardDetails;