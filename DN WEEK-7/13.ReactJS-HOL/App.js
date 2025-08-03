import React, { useState } from 'react';
import CourseDetails from './components/CourseDetails';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';

function App() {
  const [showCourses, setShowCourses] = useState(true);
  const [showBooks, setShowBooks] = useState(true);
  const [showBlogs, setShowBlogs] = useState(true);

  return (
    <div style={{ margin: '50px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <CourseDetails show={showCourses} />
        <BookDetails show={showBooks} />
        <BlogDetails show={showBlogs} />
      </div>
    </div>
  );
}

export default App;
