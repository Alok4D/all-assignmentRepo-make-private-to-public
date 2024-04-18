import { useCallback, useEffect, useState } from "react";

export const Banner = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const carouselImages = ['https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?cs=srgb&dl=pexels-pixabay-247763.jpg&fm=jpg','https://media.wired.com/photos/5e3845277003ef0008170de8/master/pass/Sec-oilplant-518368534.jpg','https://static.vecteezy.com/system/resources/previews/025/876/334/non_2x/happy-labor-day-concept-man-working-on-construction-site-on-background-generative-ai-free-photo.jpeg'];
  const prevSlider = () => setCurrentSlider((currentSlider) => currentSlider === 0 ? carouselImages.length - 1 : currentSlider - 1);
  const nextSlider = useCallback(() => setCurrentSlider((currentSlider) => currentSlider === carouselImages.length - 1 ? 0 : currentSlider + 1), [carouselImages.length]);

  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [nextSlider]);

  return (
    <div className="h-60 w-[80%] mx-auto border rounded-xl md:h-[470px] lg:h-[540px] relative overflow-hidden">
        {/* arrow left */}
        <button onClick={prevSlider} className="absolute top-1/2 left-3 z-50 flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
          <svg className="w-4 h-4 md:w-6 md:h-6 icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
        </button>
        {/* arrow right */}
        <button onClick={nextSlider} className="absolute top-1/2 z-50 right-3  flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
          <svg className="w-4 h-4 md:w-6 md:h-6 icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
        </button>
        {/* dots */}
        <div className="flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
          {carouselImages.map((_, inx) => (
            <button key={_} onClick={() => setCurrentSlider(inx)} className={`rounded-full duration-500 bg-white ${currentSlider === inx ? "w-8" : "wz-2"} h-2`}></button>
          ))}
        </div>
        {/* Carousel container */}
        <div className="ease-linear duration-500 flex transform-gpu" style={{ transform: `translateX(-${currentSlider * 100}%)`}}>
          {/* sliders */}
          {carouselImages.map((slide, inx) => (
            <img key={slide} src={slide} className="min-w-full h-60 bg-black/20 sm:h-96 md:h-[540px] object-cover" alt={`Slider - ${inx + 1}`}/>
          ))}
        </div>
    </div>
  );
};
export default Banner;






// import { useEffect } from "react";
// import AOS from 'aos';
// import 'aos/dist/aos.css';


// const Banner = () => {

//   useEffect(() => {
//     AOS.init({
//       duration: 2000, // Set animation duration
//     });
//   }, []);

//     return (
//    <div className="w-[80%] mx-auto"  data-aos="zoom-in">
//        <div className="carousel w-full border rounded-3xl">
        
//         <div id="slide1" className="carousel-item relative w-full">
//           <img src="https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?cs=srgb&dl=pexels-pixabay-247763.jpg&fm=jpg" className="w-full lg:h-[800px]" />
//           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//             <a href="#slide4" className="btn btn-circle">❮</a> 
//             <a href="#slide2" className="btn btn-circle">❯</a>
//           </div>
//         </div> 
//         <div id="slide2" className="carousel-item relative w-full">
//           <img src="https://media.wired.com/photos/5e3845277003ef0008170de8/master/pass/Sec-oilplant-518368534.jpg" className="w-full lg:h-[800px]" />
//           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//             <a href="#slide1" className="btn btn-circle">❮</a> 
//             <a href="#slide3" className="btn btn-circle">❯</a>
//           </div>
//         </div> 
//         <div id="slide3" className="carousel-item relative w-full">
//           <img src="https://static.vecteezy.com/system/resources/previews/025/876/334/non_2x/happy-labor-day-concept-man-working-on-construction-site-on-background-generative-ai-free-photo.jpeg" className="w-full lg:h-[800px]" />
//           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//             <a href="#slide2" className="btn btn-circle">❮</a> 
//             <a href="#slide4" className="btn btn-circle">❯</a>
//           </div>
//         </div> 
//             </div>
//    </div>
//     );
// };

// export default Banner;

// // https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?cs=srgb&dl=pexels-pixabay-247763.jpg&fm=jpg
// // https://media.wired.com/photos/5e3845277003ef0008170de8/master/pass/Sec-oilplant-518368534.jpg
// // https://static.vecteezy.com/system/resources/previews/025/876/334/non_2x/happy-labor-day-concept-man-working-on-construction-site-on-background-generative-ai-free-photo.jpeg