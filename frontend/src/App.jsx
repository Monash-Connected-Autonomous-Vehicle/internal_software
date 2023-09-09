import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar';
import * as Recruitment from './pages/recruitment_platform/';
import * as Inventory from './pages/inventory_manager';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          {/* RECRUITMENT PLATFORM ROUTES */}
          <Route path='recruitment' element={<Recruitment.Home/>}>
            <Route path='applicants' element={<Recruitment.Applicants/>}/>
            <Route path='candidates' element={<Recruitment.Candidates/>}/>
            <Route path='interviewees' element={<Recruitment.Interviewees/>}/>
            <Route path='interview/notes' element={<Recruitment.InterviewNotesMode/>}/>
            <Route path='interview/questions' element={<Recruitment.InterviewQuestionMode/>}/>
            <Route path='positions' element={<Recruitment.Positions/>}/>
            <Route path='questions' element={<Recruitment.InterviewQuestions/>}/>
          </Route>
          {/* INVENTORY MANAGER ROUTES */}
          <Route path='/inventory' element={<Inventory.Home/>}>
            {/* INVENTORY MANAGER PAGES TODO */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;