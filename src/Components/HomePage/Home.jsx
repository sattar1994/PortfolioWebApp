import Navbar from './Navbar/Navbar';
import ContentHome from './ContentHome/ContentHome';
import './homepage.css';

const Home = () => {
  return(
    <>
    <div className='home-parent'>
      
      
      <Navbar />
      <ContentHome />
      
    </div>

    </>
  );
};
export default Home;