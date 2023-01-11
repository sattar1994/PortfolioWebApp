import Navbar from "../HomePage/Navbar/Navbar";
import './aboutme.css';
import { FaLinkedin, FaPhone, FaAt} from "react-icons/fa";
const ContentAboutMe = () => {
  return(
    <>
      <Navbar />
      <div className="content-parent">

          <div className='content-text'>
          <p className='content-p'>
          Hello, I'm Sattar Mafakheri, I'm 28 years old, I'm a front-end developer, I started learning front-end for a year completely self-    <span className="span">taught, I'm happy that I overcame the challenges of this path and I was able to improve and I continue on my </span> way to 
          improve.
           </p>
      </div>
        

        <div className="adress-parent">
          <h1>My ways of Communication</h1>
          <address className="adres">
            <FaAt  className="icon" /> <span>Email:</span> <a href="https://mafakhersattar@gmail.com" target='blank'>mafakhersattar@gmail.com</a>
            <br />
             <FaLinkedin className="icon" /> <span>Linkedin:</span> <a href="https://www.linkedin.com/in/sattar-mafakheri-4ba890237/" target='blank'> My Linkedin</a>
            <br />
                <FaPhone className="icon" /> <span>PhonNumber:</span><a href="09036139085" target='blank'>09036139085</a>
            
            
          </address>
        
        </div>
        
      </div>
      
    </>
  );
};
export default ContentAboutMe;