
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const TeamSection = () => {

    useEffect(() => {
        AOS.init({
          duration: 2000,
        });
      }, []);

    return (
        <section className="py-6 w-[80%] mx-auto mt-7 dark:bg-gray-100 dark:text-gray-800" data-aos="zoom-in">

        <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
            <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">Meet our Leadership Team</h1>
            <p className="max-w-2xl text-center dark:text-gray-600">At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur quam natus quis nihil quod, hic explicabo doloribus magnam neque, exercitationem eius sunt!</p>
            <div className="flex flex-row flex-wrap-reverse justify-center pt-8">
                <div className="flex flex-col justify-center m-8 text-center">
                    <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?0" />
                    <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
                    <p className="dark:text-gray-600">Visual Designer</p>
                </div>
                <div className="flex flex-col justify-center m-8 text-center">
                    <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?1" />
                    <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
                    <p className="dark:text-gray-600">Visual Designer</p>
                </div>
                <div className="flex flex-col justify-center m-8 text-center">
                    <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?2" />
                    <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
                    <p className="dark:text-gray-600">Visual Designer</p>
                </div>
                <div className="flex flex-col justify-center m-8 text-center">
                    <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?3" />
                    <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
                    <p className="dark:text-gray-600">Visual Designer</p>
                </div>
                <div className="flex flex-col justify-center m-8 text-center">
                    <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?4" />
                    <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
                    <p className="dark:text-gray-600">Visual Designer</p>
                </div>
                <div className="flex flex-col justify-center m-8 text-center">
                    <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?5" />
                    <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
                    <p className="dark:text-gray-600">Visual Designer</p>
                </div>
            </div>
        </div>

    </section>
    );
};

export default TeamSection;