import React, { useState } from 'react';
import NavBar from './NavBar';
import CreatePost from './CreatePost';
import './App.css';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'My First Blog Post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam blandit consequat nisl, sed venenatis turpis sodales nec. Donec vitae ultrices justo, quis facilisis tortor. Sed quis dui eget justo consectetur tincidunt. Aenean ut leo eu lorem bibendum hendrerit.',
    },
    {
      id: 2,
      title: 'React vs Angular: Which One is Better?',
      content: 'Etiam cursus ante sed bibendum euismod. Donec vitae erat malesuada, sagittis leo vel, semper felis. Quisque consectetur sapien vel lobortis tristique. Nam nec elit id felis gravida feugiat. Curabitur eu est eget nibh finibus interdum.',
    },
    {
      id: 3,
      title: 'JavaScript Tips and Tricks',
      content: 'Suspendisse eu ex eget lectus consequat dictum. Nam pellentesque sem nec risus convallis, ut molestie nisl aliquam. Nulla facilisi. Fusce bibendum, lacus a lacinia dapibus, arcu nunc fringilla velit, ut viverra tellus justo id odio.',
    },
  ]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="app-container">
      <NavBar />
      <div className="main-container">
        <h1 className="title">Welcome to my Wii React Blog!</h1>
        <p className="subtitle">This is where I share my thoughts, ideas, and experiences.</p>
        <div className="post-container">
          {posts.map(post => (
            <div key={post.id} className="post">
              <h2 className="post-title">{post.title}</h2>
              <p className="post-content">{post.content}</p>
              <a href={`/posts/${post.id}`} className="view-btn">View</a>
            </div>
          ))}
        </div>
        <CreatePost addPost={addPost} />
      </div>
    </div>
  );
}

export default App;
