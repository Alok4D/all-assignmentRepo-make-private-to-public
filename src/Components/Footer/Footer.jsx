import photo from '../../../public/Logo-img/logo.jpg';
import photofooter from '../../../public/Images/demo3-payment.png';


const Footer = () => {
    return (
     <div>
         <footer className="pt-14 bg-base-200 text-base-content">
        <div className='footer h-[280px] w-[83%] mx-auto '>
            

<nav>
    <div className="flex justify-center items-center gap-1">
      <img src={photo} alt="" />
      <h2 className='text-4xl'>Vactor</h2>
    </div>
   <div>
    <p>82 Valley Farms Court Grovetown</p>
   </div>
   <div>
   (546) 347-9636
   </div>
   <div>
   Mon - Sat : 8 AM - 5 PM
   </div>
  </nav> 

  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
 
  <form>
    <h6 className="footer-title">Newsletter</h6> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="join">
        <input type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
        </div>
        </footer>

      <div className='m-container h-20 w-full  rounded-[8px]'>
      <div className='flex justify-between w-[79%] mx-auto pt-7'>
          <h2>Copyright © 2023 Vactor Store. All Rights Reserved.</h2>
          <div>
            <img src={photofooter} alt="footer-photo" />
          </div>
        </div>
      </div>

     </div>
    );
};

export default Footer;