import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getFromLocalStorage, saveToLocalStorage } from '../utils/localStorage';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blogs = getFromLocalStorage('blogs');
  const blog = blogs.find(blog => blog.id === parseInt(id));

  const handleDelete = () => {
    const updatedBlogs = blogs.filter(blog => blog.id !== parseInt(id));
    saveToLocalStorage('blogs', updatedBlogs);
    navigate('/');
  };

  if (!blog) {
    return <div className="p-6 text-white bg-gray-900 min-h-screen">Blog not found</div>;
  }

  return (
    <div className="p-6 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 text-white min-h-screen">
      <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl mb-4 font-semibold">{blog.title}</h1>
        <p className="text-gray-400 mb-4">By {blog.author} on {blog.date}</p>
        <img src={blog.thumbnail} alt={blog.title} className="w-full h-64 object-cover mb-4 rounded-lg shadow-md" />
        <div dangerouslySetInnerHTML={{ __html: blog.content }} className="prose prose-invert mb-4"></div>
        <button onClick={handleDelete} className="px-6 py-3 text-white bg-red-500 rounded hover:bg-red-700 transition mr-4">
          Delete Blog
        </button>
        <Link to={`/blog/edit/${blog.id}`} className="px-6 py-3 text-white bg-green-500 rounded hover:bg-green-700 transition">
          Edit Blog
        </Link>
      </div>
    </div>
  );
};

export default BlogDetail;
