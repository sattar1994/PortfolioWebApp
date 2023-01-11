import Myimage from '../1652558683629.jpg';
const ContentHome = () => {
  return(
    <div className='content-parent'>

      <div className='parent-text'>
        <p>
          <span className='hello'>Hello</span>
          <span className='name'>My Name Is</span>
          <br />
          <span className='sattar'>Sattar Mafakheri</span>
          <br />
          <span className='react'>I am ReactJS Developer</span>
        </p>
      </div>

      <div className='parent-img'>
      <img src={Myimage} className='image' />
    
      </div>

      
    </div>
  );
};
export default ContentHome;