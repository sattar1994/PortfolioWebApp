import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/HomePage/Home';
import ContentAboutMe from './Components/Aboutme/ContentAboutMe';
import SkillsPage from './Components/SkillsPage/SkillsPage';

 const App = () => {
  return (
   <div>
     <Routes>

       <Route path='/' element={<Home />} />

       <Route path='/Aboutme' element={<ContentAboutMe />} />

       <Route path='/skillspage' element={<SkillsPage />} />


       
     </Routes>  
     
   </div>
  );
};
export default App;
