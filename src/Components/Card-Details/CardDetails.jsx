
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
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 mt-[52px] mb-[52px] w-[80%] mx-auto ">

        <div className="flex justify-center items-center bg-slate-200 border rounded-xl">
            <img src={image} alt="Card Images" className="lg:p-8 p-2 lg:w-[1000px] w-[300px]"/>
        </div>
    <div className="c-details">
        <h2 className="text-[#131313] text-[40px]">{estate_title}</h2>
        <span className="text-[#646262] text-[20px]">Category : {segment_name}</span>
        <h3 className="mt-2 mb-2">{description}</h3>
        <p className="text-[#131313] mt-3"><span className="text-[#131313] text-[16px]">Price : </span>{price}</p>
        <p></p>


    <div className="flex gap-[65px] mt-4">
       <div className="text-[16px] text-[#646262]">
       <p>Status :</p>
        <p className="mt-2 mb-2">location :</p>
        <p>Area :</p>
       </div>
       <div className="text-[16px] text-[#646262]">
        <p>{status}</p>
        <p  className="mt-2 mb-2">{location}</p>
        <p>{area}</p>
       
       </div>
    </div>

    <div className="facilities flex gap-2 mt-1">
        <p>#{facilities[1]}</p>
        <p>#{facilities[2]}</p>
    </div>


    </div>
    </div>
    );
};

export default CardDetails;