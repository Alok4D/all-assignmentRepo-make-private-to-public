
import {useLoaderData, useParams} from "react-router-dom";

const CardDetails = () => {
    const cardDetail = useLoaderData();
    const {id} = useParams();
    const dataInt = parseInt(id);
    const cardBio = cardDetail.find(item => item.id == dataInt)
    console.log(cardBio);

    // const {image, segment_name, location, estate_title, price, id} = cardList;

    return (
        <div>
           <img src={cardBio.image} alt="" />
        </div>
    );
};

export default CardDetails;