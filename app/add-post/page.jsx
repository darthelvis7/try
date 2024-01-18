'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const AddPost = () => {
  // State to hold the form data
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  // Handle form input changes
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch('/api/add-post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      });
      router.refresh();
    } catch (error) {
      console.log(error);
    }

    setTitle('');
    setContent('');
		console.log("success")
  };

  return (
    <main>
      <h1>Add Post</h1>
      <Link href={'../'}>See Feed</Link>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
          />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </main>
  );
};

export default AddPost;
