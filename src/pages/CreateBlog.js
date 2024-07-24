import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import '../styles/globals.css'; // Import custom global styles
import { useNavigate } from 'react-router-dom';
import { saveToLocalStorage } from '../utils/localStorage';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [content, setContent] = useState('');
  const [topics, setTopics] = useState([]);
  const [availableTopics, setAvailableTopics] = useState(['Technology', 'Fashion', 'Education', 'Politics', 'Daily News', 'Others']);
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      id: Date.now(), // Simple ID generation
      title,
      author,
      date,
      thumbnail,
      content,
      topics
    };

    const existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    existingBlogs.push(newBlog);
    saveToLocalStorage('blogs', existingBlogs);

    navigate('/');
  };

  const handleTopicChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
    setTopics(selectedOptions);
  };

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl mb-6 font-semibold">Create a New Blog</h1>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg font-medium mb-2">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="author" className="block text-lg font-medium mb-2">Author</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="date" className="block text-lg font-medium mb-2">Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="thumbnail" className="block text-lg font-medium mb-2">Thumbnail URL</label>
          <input
            type="text"
            id="thumbnail"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="content" className="block text-lg font-medium mb-2">Content</label>
          <ReactQuill
            id="content"
            value={content}
            onChange={setContent}
            className="bg-gray-700"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="topics" className="block text-lg font-medium mb-2">Select Topics</label>
          <select
            id="topics"
            multiple
            value={topics}
            onChange={handleTopicChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md"
          >
            {availableTopics.map(topic => (
              <option key={topic} value={topic}>{topic}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        >
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
