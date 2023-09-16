import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import ErrorPage from './pages/ErrorPage';
import * as Inventory from './pages/inventory_manager';
import * as Recruitment from './pages/recruitment_platform/';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
  },
  {
    path: '/recruitment',
    element: <Recruitment.Home />,
  },
  {
    path: '/recruitment/applicants',
    element: <Recruitment.Applicants />,
  },
  {
    path: '/recruitment/candidates',
    element: <Recruitment.Candidates />,
  },
  {
    path: '/recruitment/interviewees',
    element: <Recruitment.Interviewees />,
  },
  {
    path: '/recruitment/interview/notes',
    element: <Recruitment.InterviewNotesMode />,
  },
  {
    path: '/recruitment/interview/questions',
    element: <Recruitment.InterviewQuestionMode />,
  },
  {
    path: '/recruitment/positions',
    element: <Recruitment.Positions />,
  },
  {
    path: '/recruitment/questions',
    element: <Recruitment.InterviewQuestions />,
  },
  {
    path: '/inventory',
    element: <Inventory.Home />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
