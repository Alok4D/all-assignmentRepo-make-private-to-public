import photoabout from '../../../public/Images/about-header-1536x726.png';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const AboutUs = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000, 
    });
  }, []);

    return (
      <div className='w-[80%] mx-auto mt-8 mb-8'  data-aos="zoom-out-up">
        <div >
          <h2 className='text-[45px] text-center'>About Industrial Manager</h2>
        </div>
        <div>
          <p className='mt-3 text-center '>Industrial Manager is an award-winning software company who is transforming how businesses get work done. Our cloud-based project portfolio management platform enables world-class collaboration for thousands of customers globally, with tools for project planning, workflow management, resource management and time tracking across the entire work lifecycle.</p>
          <div className="img-factory-manager mt-2 mb-2">
            <img src={photoabout} alt="" />
            <p>Industrial Manager provides in-depth features for leaders to make data-driven decisions and for businesses to manage projects of all levels of complexity on one, accessible SaaS platform. Organizations such as NASA, Marriott and AT&T rely on our software to manage their teams, their projects, and do amazing things together. ProjectManager is headquartered in Austin, with offices in Auckland, Seattle and other great cities across the globe.</p>
          </div>
        </div>
      </div>
    );
};

export default AboutUs;