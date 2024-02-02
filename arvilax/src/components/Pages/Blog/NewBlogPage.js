// NewBlogPost.jsx

import React, { useState } from 'react';

const NewBlogPost = ({ onAddPost }) => {
  const [newPost, setNewPost] = useState({
    title: '',
    author: '',
    content: '',
    // Add other fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const handleAddPost = () => {
    // Validate the newPost object if needed
    // ...

    // Pass the newPost to the parent component
    onAddPost(newPost);

    // Clear the form or reset state
    setNewPost({
      title: '',
      author: '',
      content: '',
      // Reset other fields as needed
    });
  };

  return (
    <div>
      {/* Your form or input fields go here */}
      <label>Title:</label>
      <input type="text" name="title" value={newPost.title} onChange={handleChange} />
      {/* Add other input fields as needed */}

      {/* Button to add the new post */}
      <button onClick={handleAddPost}>Add Post</button>
    </div>
  );
};

export default NewBlogPost;
