import Navbar from '../HomePage/Navbar/Navbar';
import './skills.css';
const SkillsPage = () => {
  return(
    <div>
      <Navbar />
      <div className='parent-skills'>
        
        <div className='parent-h'>
          <span>HTML5:</span>
          <div className='person-parent'>
            <div className='person'></div>
          </div>
        </div>

        <div className='parent-h'>
          <span>CSS3:</span>
          <div className='person-parent'>
            <div className='person'></div>
          </div>
        </div>
        
        <div className='parent-h'>
          <span>JavaScript:</span>
          <div className='person-parent'>
            <div className='person j'></div>
          </div>
        </div>

        <div className='parent-h'>
          <span>BootStrap5:</span>
          <div className='person-parent'>
            <div className='person b'></div>
          </div>
        </div>

         <div className='parent-h'>
          <span>flexBox:</span>
          <div className='person-parent'>
            <div className='person'></div>
          </div>
        </div>

         <div className='parent-h'>
          <span>React JS:</span>
          <div className='person-parent'>
            <div className='person r'></div>
          </div>
        </div>

        <div className='link-parent'>
        <p>This is My First Project 4 Month ago <a href='https://www.mindrestaurant.ir' target='blank' >mindrestaurant.ir</a> </p>
        </div>
      </div>
    
    </div>
  );
};
export default SkillsPage;