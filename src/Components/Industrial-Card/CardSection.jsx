
import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import CardData from "./CardData";


const CardSection = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('Industrial.json')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
    console.log(data);

  return (
    <div className="mt-8 ">

         <Banner></Banner>

      <div className="mt-8 mb-8">
        <h2 className="text-[#131313] text-[40px] text-center">Industrial Card : {data.length}</h2>
      </div>

      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5 w-[90%] mx-auto">
        {
            data.map(cardList => <CardData key={cardList.id} cardList={cardList}></CardData>)
        }
      </div>



    </div>
  );
};

export default CardSection;
