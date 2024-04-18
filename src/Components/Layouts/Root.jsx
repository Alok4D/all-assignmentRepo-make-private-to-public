import { Helmet } from "react-helmet-async";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Outlet } from 'react-router-dom';


const Root = () => {
    return (
        <div>
           <Helmet>
            <title>Vactor-Industrial-Project</title>
           </Helmet>
          <div>
          <Navbar></Navbar>
            <Outlet></Outlet>
          </div>
          
          <Footer></Footer>
        </div>
       
    );
};

export default Root;