
import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import CardData from "./CardData";

import AOS from 'aos';
import 'aos/dist/aos.css';
import TeamSection from "../Our-team/TeamSection";





const CardSection = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000, // Set animation duration
    });
  }, []);

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('Industrial.json')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
    console.log(data);

  return (
    <div className="mt-8 mb-8">

         <Banner></Banner>

      <div className="mt-8 mb-8">
        <h2 className="text-[#131313] text-[50px] text-center">Estate Section</h2>
      </div>

      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5 lg:w-[80%] mx-auto  " data-aos="zoom-in">
        {
            data.map(cardList => <CardData key={cardList.id} cardList={cardList}></CardData>)
        }
      </div>

        <div>
          <TeamSection></TeamSection>
        </div>

    </div>
  );
};

export default CardSection;
