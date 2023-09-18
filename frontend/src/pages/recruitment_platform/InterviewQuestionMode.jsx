import React from 'react';
import NavBar from '../../components/Navbar';

const InterviewQuestionMode = () => {
    return (
        <div style={{ height: '100vh', backgroundColor: '#001633', color: 'white', textAlign: 'center' }}>
        {/* Render the NavBar component */}
        <NavBar />
        <div style={{ padding: '20px' }}>
          <h1>Interview Question</h1>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
            <h2 style={{ margin: '0', marginLeft: '20%' }}>Question 1</h2>
            <button onClick={() => window.location.href = '/recruitment/interview/notes'}>Note taking mode</button>
          </div>
          <div style={{ textAlign: 'left', maxWidth: '600px', margin: '20px auto' }}>
            <p>
              {/* question text */}
              How many letters in apple
            </p>
            {/* image and text for question */}
            <div style={{ border: '1px solid white', padding: '150px', maxWidth: '800px', margin: '0 auto' }}>
              <p>Rectangular box with image or text for question goes here</p>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <button>Previous</button>
            <button>Next</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default InterviewQuestionMode;

  
  
  
  
  
  