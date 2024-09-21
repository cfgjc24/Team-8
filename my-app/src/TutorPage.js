import React, { useState, useEffect } from 'react';
import './TutorPage.css';

function TutorsPage() {
  const students = [
    { name: 'Student 1', description: 'Description for Student 1' },
    { name: 'Student 2', description: 'Description for Student 2' },
    { name: 'Student 3', description: 'Description for Student 3' },
    { name: 'Student 4', description: 'Description for Student 4' },
    { name: 'Student 5', description: 'Description for Student 5' },
    // Add more students as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % students.length);
    }, 3000); // Adjust timing (3 seconds per slide)
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
                transform: `translateX(${(index - currentIndex) * 220}px)`, // Control student positioning
                opacity: index === currentIndex ? 1 : 0.5, // Fade out inactive students
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
