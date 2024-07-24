import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill's CSS

const BlogEditor = ({ saveBlog }) => {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');

  const handleSave = () => {
    const blog = {
      id: Date.now(),
      title,
      content,
    };
    saveBlog(blog);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <ReactQuill value={content} onChange={setContent} className="mb-4" />
      <button onClick={handleSave} className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">
        Save Blog
      </button>
    </div>
  );
};

export default BlogEditor;
