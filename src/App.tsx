import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { supabase } from './API/new';
import { Cart } from './components/Cart';
import { Product } from './components/Product';

type Course = {
  id: number;
  Title: string;
  Description: string;
  Price: number;
};

function App() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchCourses = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('courses')
      .select('*');

    if (error) {
      console.error("Error fetching courses", error.message);
      setCourses([]);
    } else {
      setCourses(data || []);
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <button onClick={fetchCourses} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Courses'}
      </button>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        {courses.length > 0 && (
          <ul>
            {courses.map(course => (
              <li key={course.id}>
                <strong>{course.Title}</strong>: {course.Description} (${course.Price})
              </li>
            ))}
          </ul>
        )}
      </div>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div style={{ padding: '20px'}}>
          <h1> SHOP</h1>

          <Product id={1} name="Laptop" price={1000} />
          <Product id={2} name="Phone" price={800} />
          <Product id={3} name="PersonalComputer" price={1200} />

          <hr />
          <Cart />
        </div>
      </header>
    </div>
  );
}

export default App;
