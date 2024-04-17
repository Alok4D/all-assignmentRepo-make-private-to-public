import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Banner = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000, // Set animation duration
    });
  }, []);

    return (
   <div className="w-[80%] mx-auto " data-aos="flip-left"
   data-aos-easing="ease-out-cubic"
   data-aos-duration="2000">
       <div className="carousel w-full border rounded-3xl">
        
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?cs=srgb&dl=pexels-pixabay-247763.jpg&fm=jpg" className="w-full lg:h-[800px]" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://media.wired.com/photos/5e3845277003ef0008170de8/master/pass/Sec-oilplant-518368534.jpg" className="w-full lg:h-[800px]" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://static.vecteezy.com/system/resources/previews/025/876/334/non_2x/happy-labor-day-concept-man-working-on-construction-site-on-background-generative-ai-free-photo.jpeg" className="w-full lg:h-[800px]" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
            </div>
   </div>
    );
};

export default Banner;

// https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?cs=srgb&dl=pexels-pixabay-247763.jpg&fm=jpg
// https://media.wired.com/photos/5e3845277003ef0008170de8/master/pass/Sec-oilplant-518368534.jpg
// https://static.vecteezy.com/system/resources/previews/025/876/334/non_2x/happy-labor-day-concept-man-working-on-construction-site-on-background-generative-ai-free-photo.jpeg