import { Link } from "react-router-dom"; 
const Navbar = () => {
  return(
    <>
      <div className="navbar-parent">
      
        <div>
          <h1 className='myportfolio'>My Portfolio</h1>
        </div>

        <div className='navbar-list-parent'>
          
          <ul className="navbar-list">
            <Link to='/' className='item'>
              <li>Home</li>
            </Link>
            
            <Link to='/Aboutme' className='item'>
              <li>AboutMe</li>
            </Link>
             
             <Link to='/skillspage' className='item'>
              <li>Skills</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Navbar;