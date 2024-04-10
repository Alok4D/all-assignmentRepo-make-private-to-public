import { Link } from "react-router-dom";


const CardData = ({ cardList }) => {
    console.log(cardList);
    const {image, segment_name, location, estate_title, price, id} = cardList;
    return (
        <div className="card bg-base-100 border shadow-xl mt-8 ">
  
        <figure className=" bg-slate-300 m-5 border rounded-lg">
          <img src={image} alt="Shoes" className="rounded-xl h-[350px]  p-5 "/>
        </figure>
      
        <div className="p-8">

      
      
         <div className="">
         <h2 className=" text-[#131313] text-[24px]">{estate_title}</h2>
          <p className="mb-[20px] mt-[16px] text-[16px] text-[#131313]">Price : {price}</p>
         </div>

        <Link to={`/cardDetails/${id}`}>
        <button className="btn btn-primary">View Property</button>
        </Link>
          
        </div>
            </div>
       
    );
};

export default CardData;