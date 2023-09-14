import React from 'react';

const InterviewQuestionMode = () => {
    return (
      <div style={{ backgroundColor: 'navy', color: 'white', padding: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h1>Interview Page</h1>
          <button onClick={() => window.location.href = '/interview/notes'}>Go to Note-Taking</button>
        </div>
        <div>
          <h2>Question 1</h2>
          <p>
            {/* question text */}
            How many letters in apple
          </p>
          {/* images and text related to the question here */}
          <div>
            <img src="image_url_here" alt="Question Image" />
            {/* Add more images and text as needed */}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <button>Previous</button>  {/* take to the next page */}
          <button>Next</button>
        </div>
      </div>
    );
  };
  
  export default InterviewQuestionMode;