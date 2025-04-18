import './App.css';
import React, { useEffect, useState } from 'react';
import { useRoutes, Link } from 'react-router-dom';
import { supabase } from './client';

import ReadPosts from './pages/ReadPosts';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';

const App = () => {
  const [posts, setPosts] = useState([]);

  // Step 1: Define fetchPosts separately
  const fetchPosts = async () => {
    const { data, error } = await supabase.from('Posts').select('*');

    if (error) {
      console.error('Error fetching posts:', error);
    } else {
      setPosts(data);
    }
  };

  // Step 2: Fetch once on mount
  useEffect(() => {
    fetchPosts();
  }, []);

  // Step 3: Pass fetchPosts to Create and Edit pages
  const element = useRoutes([
    { path: "/", element: <ReadPosts data={posts} /> },
    { path: "/edit/:id", element: <EditPost data={posts} fetchPosts={fetchPosts} /> },
    { path: "/new", element: <CreatePost fetchPosts={fetchPosts} /> }
  ]);

  return (
    <div className="App">
      <div className="header">
        <h1>👍 Bet 1.0</h1>
        <Link to="/"><button className="headerBtn">Explore Challenges 🔍</button></Link>
        <Link to="/new"><button className="headerBtn">Submit Challenge 🏆</button></Link>
      </div>
      {element}
    </div>
  );
};

export default App;
