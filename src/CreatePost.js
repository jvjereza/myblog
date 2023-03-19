import React, { useState } from 'react';

function CreatePost(props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = event => {
    setTitle(event.target.value);
  };

  const handleContentChange = event => {
    setContent(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newPost = {
      id: Math.floor(Math.random() * 1000),
      title: title,
      content: content
    };
    props.addPost(newPost);
    setTitle('');
    setContent('');
  };

  return (
    <div className="container my-5 py-5">
      <h2 className="text-center mb-4">Create Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            className="form-control"
            id="content"
            rows="5"
            value={content}
            onChange={handleContentChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
