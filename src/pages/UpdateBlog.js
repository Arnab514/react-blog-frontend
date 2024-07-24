import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import '../styles/globals.css'; // Import custom global styles
import { useParams, useNavigate } from 'react-router-dom';
import { getFromLocalStorage, saveToLocalStorage } from '../utils/localStorage';

const UpdateBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [content, setContent] = useState('');
  const [topics, setTopics] = useState([]);
  const [availableTopics, setAvailableTopics] = useState(['Technology', 'Fashion', 'Education', 'Politics', 'Daily News', 'Others']);
  const [useFile, setUseFile] = useState(false);

  useEffect(() => {
    const blogs = getFromLocalStorage('blogs') || [];
    const blogToEdit = blogs.find(blog => blog.id === parseInt(id));

    if (blogToEdit) {
      setTitle(blogToEdit.title);
      setAuthor(blogToEdit.author);
      setDate(blogToEdit.date);
      setThumbnail(blogToEdit.thumbnail);
      setContent(blogToEdit.content);
      setTopics(blogToEdit.topics);
    } else {
      console.error('Blog not found');
      navigate('/');
    }
  }, [id, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBlog = {
      id: parseInt(id), // Maintain the same ID
      title,
      author,
      date,
      thumbnail,
      content,
      topics
    };

    const blogs = getFromLocalStorage('blogs') || [];
    const updatedBlogs = blogs.map(blog => blog.id === updatedBlog.id ? updatedBlog : blog);
    saveToLocalStorage('blogs', updatedBlogs);

    navigate('/');
  };

  const handleTopicChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
    setTopics(selectedOptions);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setThumbnail(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl mb-6 font-semibold">Update Blog</h1>
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
          <label className="block text-lg font-medium mb-2">Thumbnail</label>
          <div className="mb-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="thumbnailOption"
                value="url"
                checked={!useFile}
                onChange={() => setUseFile(false)}
                className="mr-2"
              />
              Use URL
            </label>
            <label className="inline-flex items-center ml-4">
              <input
                type="radio"
                name="thumbnailOption"
                value="file"
                checked={useFile}
                onChange={() => setUseFile(true)}
                className="mr-2"
              />
              Upload File
            </label>
          </div>
          {useFile ? (
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md"
              required
            />
          ) : (
            <input
              type="text"
              id="thumbnail"
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md"
              required
            />
          )}
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
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default UpdateBlog;
