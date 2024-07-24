import React from 'react';
import { Link } from 'react-router-dom';
import { getFromLocalStorage } from '../utils/localStorage';

const Home = () => {
  const blogs = getFromLocalStorage('blogs') || []; // Default to empty array if no blogs found

  if (!Array.isArray(blogs)) {
    console.error('Invalid data format for blogs');
    return <div className="p-6 text-white bg-gray-900 min-h-screen">Error loading blogs</div>;
  }

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl mb-6 font-semibold">Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {blogs.length === 0 ? (
          <p>No blogs available.</p>
        ) : (
          blogs.map(blog => (
            <div key={blog.id} className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-gray-600 flex flex-col">
              <div className="relative w-full h-48"> {/* Adjusted height */}
                <img src={blog.thumbnail} alt={blog.title} className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="p-3 flex flex-col flex-grow"> {/* Adjusted padding */}
                <h2 className="text-lg font-bold mb-1 truncate">{blog.title}</h2> {/* Adjusted font size and margin */}
                <p className="text-gray-400 mb-3 text-xs truncate">By {blog.author} on {blog.date}</p> {/* Adjusted font size and margin */}
                <div className="flex flex-wrap gap-1 mb-2"> {/* Adjusted gap and margin */}
                  {blog.topics?.map(topic => (
                    <span key={topic} className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">{topic}</span>
                  )) || <span className="bg-gray-600 text-white text-xs px-2 py-1 rounded-full">No Topics</span>}
                </div>
                <div className="mt-auto">
                  <Link to={`/blog/${blog.id}`} className="text-blue-400 hover:underline text-xs">Read More</Link> {/* Adjusted font size */}
                  <Link to={`/blog/edit/${blog.id}`} className="block mt-2 text-green-400 hover:underline text-xs">Edit</Link> {/* Adjusted font size */}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
