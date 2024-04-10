import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Outlet } from 'react-router-dom';


const Root = () => {
    return (
        <div >
           
          <div className="w-[88%] mx-auto">
          <Navbar></Navbar>
            <Outlet></Outlet>
          </div>
          
          <Footer></Footer>
        </div>
       
    );
};

export default Root;