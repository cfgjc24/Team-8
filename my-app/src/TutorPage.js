import React, { useState, useEffect } from 'react';
import './TutorPage.css';

function TutorsPage() {
  // Array of student objects with their names and descriptions
  const students = [
    { name: 'Student 1', description: 'Description for Student 1' },
    { name: 'Student 2', description: 'Description for Student 2' },
    { name: 'Student 3', description: 'Description for Student 3' },
    { name: 'Student 4', description: 'Description for Student 4' },
    { name: 'Student 5', description: 'Description for Student 5' },
    // Add more students as needed
  ];

  // State to keep track of the current student's index for the slideshow
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically cycle through students every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the index, wrapping around when reaching the end of the list
      setCurrentIndex((prevIndex) => (prevIndex + 1) % students.length);
    }, 3000); // Adjust timing (3 seconds per slide)
    
    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, [students.length]);

  return (
    <div id="tutors">
      <div className="container">
        <h1 className="sub-title">My Students</h1>
        <div className="students-list">
          {students.map((student, index) => (
            <div
              className="student"
              key={index}
              style={{
                // Adjust horizontal position of the students based on currentIndex
                transform: `translateX(${(index - currentIndex) * 220}px)`,
                // Reduce opacity for inactive students
                opacity: index === currentIndex ? 1 : 0.5,
                // Smooth transition for both position and opacity changes
                transition: 'transform 0.5s ease, opacity 0.5s ease'
              }}
            >
              <div className="layer">
                <h3>{student.name}</h3>
                <p>{student.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TutorsPage;
